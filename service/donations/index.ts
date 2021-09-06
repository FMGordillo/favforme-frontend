import { DocumentNode, gql } from "@apollo/client";
import { DonationI } from "@/lib/types";
import request from "@/lib/apollo";

export * from "./useDonations";

const GET_DONATION = gql`
  query getDonation($id: String) {
    donation(where: { id: $id }) {
      id
      amount
      action {
        title
        organization {
          name
        }
      }
    }
  }
`;

type GetDonationParams = {
  query?: DocumentNode;
  variables: {
    id: string;
  };
};

export const getDonation = async ({
  query = GET_DONATION,
  variables,
}: GetDonationParams): Promise<DonationI | null> => {
  const { data } = await request.query<{ donation: DonationI | null }>({
    query,
    variables,
    fetchPolicy: "no-cache",
  });
  return data.donation;
};
