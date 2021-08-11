import { differenceInDays, formatDistance } from "date-fns";
import { getProgressValue, parseToCurrency } from "../lib/data";
import { ActionI } from "../lib/types";
import esES from "date-fns/locale/es";

type Urgency = "high" | "medium" | "meh";

type DueDate = {
  date: string;
  urgency: Urgency;
} | null;

export interface UseCalculationsReturn {
  finalAmount: string;
  completition: string;
  currentAmount: string;
  dueDate: DueDate | null;
}

export const makeCalculations = (
  data: ActionI | null
): UseCalculationsReturn => {
  const currentAmount = data?.current;
  const finalAmount = data?.objective;

  const calculateUrgency = (days: number): Urgency =>
    days
      ? days < 21 && days > 14
        ? "medium"
        : days <= 14
        ? "high"
        : "meh"
      : "meh";

  const calculateDueDate = (
    createdAt?: string,
    endDate?: string
  ): DueDate | null => {
    try {
      if (createdAt && endDate) {
        const dateCreatedAt = new Date(createdAt);
        const dateEndDate = new Date(endDate);
        const date = formatDistance(dateEndDate, dateCreatedAt, {
          locale: esES,
        });
        const urgency = calculateUrgency(
          differenceInDays(dateEndDate, dateCreatedAt)
        );
        if (differenceInDays(dateEndDate, dateCreatedAt) <= 0) return null;
        return {
          date,
          urgency,
        };
      } else return null;
    } catch (error) {
      console.error("calculateDueDate", error);
      return null;
    }
  };

  return {
    dueDate: calculateDueDate(data?.createdAt, data?.closedAt),
    currentAmount: parseToCurrency(currentAmount),
    finalAmount: parseToCurrency(finalAmount),
    completition: getProgressValue({ currentAmount, finalAmount }),
  };
};
