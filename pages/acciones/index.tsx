import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionI } from "@/lib/types";
import { ActionsPage as Actions } from "@/containers/Actions";
import { getActions } from "@/service";

export const getServerSideProps: GetServerSideProps<{
  actions: ActionI[];
}> = async () => {
  const actions = await getActions({ take: 5 });
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
