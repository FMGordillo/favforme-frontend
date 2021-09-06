import { GET_ACTION, GET_ACTIONS } from "./queries";
import { UseCalculationsReturn, makeCalculations } from "../actionUtils";
import { ActionI } from "@/lib/types";
import request from "@/lib/apollo";

type GetActionReturn = {
  action: ActionI | null;
  amounts: UseCalculationsReturn | null;
};

export const getAction = async (
  variables: {
    id: string;
  },
  query = GET_ACTION
): Promise<GetActionReturn> => {
  try {
    const { data } = await request.query<{ findFirstAction: ActionI | null }>({
      query,
      variables,
      fetchPolicy: "no-cache",
    });

    const amounts = makeCalculations(data.findFirstAction);

    return {
      action: data.findFirstAction,
      amounts,
    };
  } catch (error) {
    return {
      action: null,
      amounts: null,
    };
  }
};

export const getActions = async (query = GET_ACTIONS): Promise<ActionI[]> => {
  try {
    const { data } = await request.query<{ actions: ActionI[] }>({
      query,
      fetchPolicy: "no-cache",
    });
    return data.actions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
