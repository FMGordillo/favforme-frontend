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
  try {
    const { data } = await getActions();

    return {
      props: {
        actions: data,
      },
    };
  } catch (error) {
    return {
      props: {
        actions: [],
      },
    };
  }
};

const IndexPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return <Index actions={props.actions} />;
};

export default IndexPage;
