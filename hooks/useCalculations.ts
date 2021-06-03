import { getProgressValue, parseToCurrency } from "../lib/data";
import { ActionI } from "../lib/types";

export interface UseCalculationsReturn {
  finalAmount: string;
  completition: string;
  currentAmount: string;
}

export const useCalculations = (
  data: ActionI | undefined
): UseCalculationsReturn => {
  const currentAmount = data?.current;
  const finalAmount = data?.objective;

  return {
    currentAmount: parseToCurrency(currentAmount),
    finalAmount: parseToCurrency(finalAmount),
    completition: getProgressValue({ currentAmount, finalAmount }),
  };
};
