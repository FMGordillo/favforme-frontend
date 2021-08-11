import { DonationI } from "@/lib/types";

interface UseDonationsReturn {
  data: DonationI[] | undefined;
}

export const useDonations = (): UseDonationsReturn => {
  return {
    data: undefined,
  };
};
