import {
  UseCalculationsReturn,
  useCalculations as makeCalculations,
} from "../useCalculations";
import { Action } from "@/lib/types";
import prisma from "@/lib/prisma";

type UserActionProps = {
  actionId: string;
};

interface UserActionReturn {
  data: Action | null;
  amounts: UseCalculationsReturn;
}

export const getAction = async ({
  actionId,
}: UserActionProps): Promise<UserActionReturn> => {
  const action = await prisma?.action.findFirst({
    where: { id: actionId },
    include: {
      organization: true,
    },
  });
  const parsedAction: Action | null = action
    ? {
        ...action,
        current: action?.current.toNumber(),
        objective: action?.objective.toNumber(),
        createdAt: action?.createdAt.toDateString(),
        updatedAt: action.updatedAt.toDateString(),
        closedAt: action.closedAt?.toDateString() || null,
        organization: {
          ...action.organization,
          createdAt: action.organization.createdAt.toDateString(),
          updatedAt: action.organization.updatedAt.toDateString(),
        },
      }
    : null;

  // parse action data

  const amounts = makeCalculations(parsedAction);

  return {
    amounts,
    data: parsedAction,
  };
};
