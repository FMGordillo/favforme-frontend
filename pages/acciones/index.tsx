import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionI } from "@/lib/types";
import { ActionsPage as Actions } from "@/containers/Actions";
import { getActions } from "@/hooks";

export const getServerSideProps: GetServerSideProps<{
  actions: ActionI[];
}> = async () => {
  const actions = await getActions();
  return {
    props: {
      actions,
    },
  };
};

const ActionsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ actions }) => {
  return <Actions actions={actions} />;
};

export default ActionsPage;
