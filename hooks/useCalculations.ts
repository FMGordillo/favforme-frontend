import { differenceInDays, formatDistance } from "date-fns";
import { getProgressValue, parseToCurrency } from "../lib/data";
import { ActionI } from "../lib/types";
import esES from "date-fns/locale/es";

type Urgency = "high" | "medium" | "meh";

type DueDate =
  | {
      date: string;
      urgency: Urgency;
    }
  | undefined;

export interface UseCalculationsReturn {
  finalAmount: string;
  completition: string;
  currentAmount: string;
  dueDate: DueDate;
}

export const useCalculations = (
  data: ActionI | undefined
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

  const calculateDueDate = (createdAt?: string, endDate?: string): DueDate => {
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
        return {
          date,
          urgency,
        };
      } else return undefined;
    } catch (error) {
      console.error("calculateDueDate", error);
    }
  };

  return {
    dueDate: calculateDueDate(data?.createdAt, data?.closedAt),
    currentAmount: parseToCurrency(currentAmount),
    finalAmount: parseToCurrency(finalAmount),
    completition: getProgressValue({ currentAmount, finalAmount }),
  };
};
