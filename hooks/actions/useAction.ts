import { UseCalculationsReturn, useCalculations } from "../useCalculations";
import { ActionI } from "../../lib/types";
import useSWR from "swr";
import request from "graphql-request";

const GET_ACTION = `
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

interface ActionSWRData {
  action: ActionI;
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

export const getAction = async (query: any): Promise<ActionI[]> => {
  try {
    const { data } = await request(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql` || "",
      GET_ACTION,
      query
    );
    console.log("haber", data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
