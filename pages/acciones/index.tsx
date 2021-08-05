import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Action } from "@/lib/types";
import { ActionsPage as Actions } from "@/containers/Actions";
import { getActions } from "@/hooks";

export const getServerSideProps: GetServerSideProps<{
  actions: Action[];
}> = async () => {
  const { data } = await getActions({ take: 5 });
  return {
    props: {
      actions: data,
    },
  };
};

const ActionsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ actions }) => {
  return <Actions data={actions} />;
};

export default ActionsPage;
