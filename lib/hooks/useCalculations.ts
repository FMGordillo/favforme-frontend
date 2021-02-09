import { parseToCurrency } from "../../lib/data";
import { Action } from "../../lib/types";

export interface UseCalculationsReturn {
  finalAmount: string;
  completition: string;
  currentAmount: string;
}

export const useCalculations = (
  data: Action | undefined
): UseCalculationsReturn => {
  const currentAmount = data?.current;
  const finalAmount = data?.objective;

  return {
    currentAmount: parseToCurrency(currentAmount),
    finalAmount: parseToCurrency(finalAmount),
    completition:
      currentAmount && finalAmount
        ? (
            ((currentAmount || 0) * 100) /
            (finalAmount || currentAmount || 0)
          ).toFixed()
        : "0",
  };
};
