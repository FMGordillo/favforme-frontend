import { Donation } from "@/lib/types";
import prisma from "@/lib/prisma";

type UsePaginatedDonationsProps = {
  actionId: string;
};

type UsePaginatedDonationsReturn = {
  data: Donation[];
};

export const usePaginatedDonations = async ({
  actionId,
}: UsePaginatedDonationsProps): Promise<UsePaginatedDonationsReturn> => {
  const donations = await prisma?.donation.findMany({ where: { actionId } });
  const cleanedDonations: Donation[] = donations
    ? donations.map((donation) => ({
        ...donation,
        amount: donation.amount.toNumber(),
        createdAt: donation.createdAt.toDateString(),
        updatedAt: donation.updatedAt.toDateString(),
      }))
    : [];
  return {
    data: cleanedDonations,
  };
};
