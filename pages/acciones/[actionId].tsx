import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { UseCalculationsReturn, getAction } from "@/service";
import { ActionPage as ActionContainer } from "@/containers";
import { ActionI } from "@/lib/types";

interface GetServerSidePropsReturn {
  props: {
    query: { id: string };
    action: ActionI | null;
    amounts: UseCalculationsReturn | null;
  };
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;
  if (typeof actionId === "string" && !!actionId) {
    const { action, amounts } = await getAction({ id: actionId });
    return {
      props: {
        query: { id: actionId },
        action,
        amounts,
      },
    };
  } else {
    const isIdArray = Array.isArray(actionId);
    const isIdEmpty = !isIdArray && typeof actionId === "undefined";

    return {
      props: {
        query: { id: isIdArray || isIdEmpty ? "" : actionId },
        action: null,
        amounts: null,
      },
    };
  }
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ action, amounts, query }) => {
  return <ActionContainer query={query} action={action} amounts={amounts} />;
};

export default ActionPage;
