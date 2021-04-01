import useSWR from "swr";
import { createQuery, Params } from "../lib/queries";
import { ActionI } from "../lib/types";

const GET_ACTIONS = (params?: Params): string => createQuery`
  {
    actions${params} {
      id
      title
      current
      objective
      closedAt
      createdAt
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
