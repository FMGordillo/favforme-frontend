import { GET_ACTION, GET_ACTIONS } from "./queries";
import { UseCalculationsReturn, makeCalculations } from "../actionUtils";
import { ActionI } from "@/lib/types";
import request from "@/lib/apollo";

type GetActionReturn = {
  action: ActionI | null;
  amounts: UseCalculationsReturn | null;
};

export const getAction = async (query: {
  id: string;
}): Promise<GetActionReturn> => {
  try {
    const { data } = await request.query<{ action: ActionI }>({
      query: GET_ACTION,
      variables: {
        id: query.id,
      },
    });

    const amounts = makeCalculations(data.action);

    return {
      action: data.action,
      amounts,
    };
  } catch (error) {
    return {
      action: null,
      amounts: null,
    };
  }
};

export const getActions = async (params?: any): Promise<ActionI[]> => {
  try {
    const { data } = await request.query<{ actions: ActionI[] }>({
      query: GET_ACTIONS,
      variables: params,
    });
    return data.actions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
