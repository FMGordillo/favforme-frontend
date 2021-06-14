import { Params, createQuery, gqlRequest } from "../../lib/queries";
import { ActionI } from "../../lib/types";

const GET_ACTIONS = (params?: Params): string => createQuery`
  {
    actions${params} {
      id
      title
      ods
      current
      objective
      closedAt
      createdAt
      mainImage
      organization {
        socialNetworks {
          type
          link
        }
      }
    }
  }
`;

export const getActions = async (params?: Params): Promise<ActionI[]> => {
  try {
    const data = await gqlRequest<{ actions: ActionI[] }>(
      GET_ACTIONS(params),
      params
    );
    return data.actions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
