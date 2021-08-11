import { GET_ACTION, GET_ACTIONS } from "./queries";
import { Params, gqlRequest } from "@/lib/queries";
import { UseCalculationsReturn, makeCalculations } from "../actionUtils";
import { ActionI } from "@/lib/types";

type GetActionReturn = {
  action: ActionI | null;
  amounts: UseCalculationsReturn | null;
};

export const getAction = async (query: {
  id: string;
}): Promise<GetActionReturn> => {
  try {
    const { action } = await gqlRequest<
      { action: ActionI | null },
      { id: string }
    >(GET_ACTION, query);

    const amounts = makeCalculations(action);

    return {
      action,
      amounts,
    };
  } catch (error) {
    return {
      action: null,
      amounts: null,
    };
  }
};

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
