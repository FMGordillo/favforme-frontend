import { ActionsPage as Actions } from "@/containers/Actions";
import { getActions } from "@/hooks";
import { ActionI } from "@/lib/types";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

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
