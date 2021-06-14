import { Params, createQuery } from "../../lib/queries";
import { ActionI } from "../../lib/types";
import axios from "axios";
import useSWR from "swr";

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

interface ActionsSWRData {
  actions: ActionI[];
}

interface UseActionsReturn {
  data: ActionsSWRData | undefined;
  error: any;
  isValidating: boolean;
}

export const useActions = (params?: Params): UseActionsReturn => {
  const { data, error, isValidating } = useSWR<ActionsSWRData>(
    GET_ACTIONS(params)
  );

  return {
    data,
    error,
    isValidating,
  };
};

export const getActions = async (params?: Params): Promise<ActionI[]> => {
  try {
    const { data } = await axios.post<{ data: { actions: ActionI[] } }>(
      "/graphql",
      {
        query: GET_ACTIONS(params),
      }
    );
    return data.data.actions;
  } catch (error) {
    return [];
  }
};
