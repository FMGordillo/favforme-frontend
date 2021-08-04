import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Action } from "@/lib/types";
import { ActionPage as ActionContainer } from "@/containers";
import { getAction } from "@/hooks";

type GetServerSidePropsReturn = {
  props: {
    query: {
      id: string | undefined;
    };
    action: Action | null;
  };
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;
  if (typeof actionId === "string") {
    const { data } = await getAction({ actionId });
    return {
      props: {
        query: { id: actionId },
        action: data,
      }, // will be passed to the page component as props
    };
  } else {
    return {
      props: {
        query: { id: undefined },
        action: null,
      },
    };
  }
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query, action }) => {
  return <ActionContainer query={query} action={action} />;
};

export default ActionPage;
