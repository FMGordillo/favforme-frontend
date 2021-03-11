import useSWR from "swr";
import { Action } from "../lib/types";
import { useCalculations, UseCalculationsReturn } from "./useCalculations";

const GET_ACTION = `
  query getAction($id: String) {
    action(where: { id: $id }) {
      id
      title
      current
      objective
      description
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

interface ActionSWRData {
  action: Action;
}

interface UseActionReturn {
  error: any;
  isValidating: boolean;
  amounts: UseCalculationsReturn;
  data: ActionSWRData | undefined;
}

interface UseActionProps {
  query?: any;
}

/**
 * FIXME: Es necesario todo esto?
 */
export const useAction = ({ query }: UseActionProps): UseActionReturn => {
  const { data, error, isValidating } = useSWR<ActionSWRData>(() =>
    query ? [GET_ACTION, query] : null
  );
  const amounts = useCalculations(data?.action);

  return {
    amounts,
    data,
    error,
    isValidating,
  };
};
