import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Action } from "@/lib/types";
import { IndexPage as Index } from "@/containers";

import { getActions } from "@/hooks";

export const getServerSideProps: GetServerSideProps<{
  actions: Action[];
}> = async () => {
  const { data } = await getActions();

  return {
    props: {
      actions: data,
    },
  };
};

const IndexPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return <Index actions={props.actions} />;
};

export default IndexPage;
