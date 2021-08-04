import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionIndex } from "..";
import { ActionsPage as Actions } from "@/containers/Actions";
import prisma from "@/lib/prisma";

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{
  actions: ActionIndex[];
}> = async () => {
  // const actions = await getActions({ take: 5 });
  const actions = await prisma.action.findMany({
    take: 5,
    include: { organization: true },
  });
  return {
    props: {
      actions,
    },
  };
};

const ActionsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ actions }) => {
  return <Actions data={actions} />;
};

export default ActionsPage;
