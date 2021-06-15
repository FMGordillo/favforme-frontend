import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionI } from "@/lib/types";
import { IndexPage as Index } from "@/containers";
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

const IndexPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return <Index actions={props.actions} />;
};

export default IndexPage;
