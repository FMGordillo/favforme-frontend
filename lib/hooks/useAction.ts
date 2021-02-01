import { Action } from "lib/types";
import useSWR from "swr";

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
  data: ActionSWRData | undefined;
  error: any;
  isValidating: boolean;
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

  return {
    data,
    error,
    isValidating,
  };
};
