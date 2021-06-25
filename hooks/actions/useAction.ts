import { ActionI } from "../../lib/types";
import { fetcher } from "@/lib/queries";
import { gql } from "graphql-request";

const GET_ACTION = gql`
  query getAction($id: String) {
    action(where: { id: $id }) {
      id
      title
      ods
      current
      objective
      description
      mainImage
      organization {
        logo
        history
        socialNetworks {
          type
          link
        }
      }
    }
  }
`;

export const getAction = async (params: {
  id: string;
}): Promise<ActionI | null> => {
  try {
    const data = await fetcher(GET_ACTION, params);
    return data.action;
  } catch (error) {
    return null;
  }
};
