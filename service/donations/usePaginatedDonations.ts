import { Params, createQuery } from "@/lib/queries";
import { useEffect, useState } from "react";
import { DonationI } from "@/lib/types";
import request from "graphql-request";
import useSWR from "swr";

const COUNT_DONATIONS = `
{
  aggregateDonation {
    _count {
      id
    }
  }
}
`;

const GET_DONATIONS = (params?: Params): string => createQuery`
  {
    donations${params} {
      id
      amount
      user {
        name
        surname
        userType
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
  count: number | undefined;
  error: any;
  isValidating: boolean;
  refetch: (
    data?: DonationsSWRData | Promise<DonationsSWRData> | undefined,
    shouldRevalidate?: boolean | undefined
  ) => Promise<UseDonationsData>;
}

export const usePaginatedDonations = (params?: Params): UseDonationsReturn => {
  const [count, setCount] = useState<number | undefined>(undefined);
  const { data, error, isValidating, mutate } = useSWR<DonationsSWRData>(
    GET_DONATIONS(params)
  );

  useEffect(() => {
    const getLength = async () => {
      try {
        const donationLength = await request(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql` || "",
          COUNT_DONATIONS
        );
        setCount(donationLength?.aggregateDonation?.count?.id);
      } catch (error) {
        setCount(0);
      }
    };
    getLength();
  }, []);

  return {
    data,
    count,
    refetch: mutate,
    error,
    isValidating,
  };
};
