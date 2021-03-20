import useSWR from "swr";
import { createQuery, Params } from "@/lib/queries";
import { DonationI } from "@/lib/types";

const GET_DONATORS = (params?: Params): string => createQuery`
  {
    donations${params} {
      id
      amount
      user {
        name
        surname
      }
      createdAt
    }
  }
`;

interface DonationsSWRData {
  donations: DonationI[];
}

export type UseDonationsData = DonationsSWRData | undefined;

interface UseDonationsReturn {
  data: UseDonationsData;
  error: any;
  isValidating: boolean;
  refetch: (
    data?: DonationsSWRData | Promise<DonationsSWRData> | undefined,
    shouldRevalidate?: boolean | undefined
  ) => Promise<UseDonationsData>;
}

export const useDonations = (params?: Params): UseDonationsReturn => {
  const { data, error, isValidating, mutate } = useSWR<DonationsSWRData>(
    GET_DONATORS(params)
  );

  return {
    data,
    refetch: mutate,
    error,
    isValidating,
  };
};
