import { Action, Organization } from "@prisma/client";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { IndexPage as Index } from "@/containers";
import prisma from "@/lib/prisma";

export type ActionIndex = Action & {
  current: number;
  objective: number;
  createdAt: string;
  updatedAt: string;
  organization: Organization;
};

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{
  actions: ActionIndex[];
}> = async () => {
  // const actions = await getActions();
  const actions = await prisma.action.findMany({
    include: {
      organization: true,
    },
  });
  const cleanedActions = actions.map((action) => ({
    ...action,
    current: action.current.toNumber(),
    objective: action.objective.toNumber(),
    createdAt: action.createdAt.toDateString(),
    updatedAt: action.updatedAt.toDateString(),
    organization: {
      ...action.organization,
      createdAt: action.organization.createdAt.toDateString(),
      updatedAt: action.organization.updatedAt.toDateString(),
    },
  }));

  return {
    props: {
      actions: cleanedActions,
    },
  };
};

const IndexPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return <Index actions={props.actions} />;
};

export default IndexPage;
