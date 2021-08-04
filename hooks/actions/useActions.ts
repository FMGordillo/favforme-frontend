import { Action } from "@/lib/types";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

type GetActionProps = {
  where?: Prisma.ActionWhereInput | undefined;
  take?: number | undefined;
};

/**
 * TODO: Move this from /hooks to another place
 * TODO: Unify with `useAction`
 */
export const getActions = async (
  props?: GetActionProps
): Promise<{ data: Action[] }> => {
  const actions = await prisma?.action.findMany({
    ...props,
    include: { organization: true },
  });
  const parsedActions: Action[] = actions
    ? actions.map((action) => ({
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
      }))
    : [];

  return {
    data: parsedActions,
  };
};
