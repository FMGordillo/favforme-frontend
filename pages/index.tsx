import { IndexPage as Index } from "@/containers";
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
  const actions = await getActions();
  return {
    props: {
      actions,
    },
  };
};

const IndexPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ actions }) => {
  return <Index actions={actions} />;
};

export default IndexPage;
