import { Action, Organization } from "@prisma/client";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionPage as ActionContainer } from "@/containers";
import prisma from "@/lib/prisma";

export type ActionIdIndex =
  | (Action & {
      organization: Organization;
    })
  | null;
interface GetServerSidePropsReturn {
  props: {
    query: { id: any };
    action: ActionIdIndex;
  };
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;
  if (typeof actionId === "string") {
    const action = await prisma.action.findFirst({
      where: { id: actionId },
      include: {
        organization: true,
      },
    });
    return {
      props: {
        query: { id: actionId },
        action,
      }, // will be passed to the page component as props
    };
  } else {
    return {
      props: {
        query: { id: actionId },
        action: null,
      },
    };
  }
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query, action }) => {
  return <ActionContainer query={query} action={action} />;
};

export default ActionPage;
