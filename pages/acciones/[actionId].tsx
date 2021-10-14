import { GetServerSideProps, InferGetStaticPropsType, NextPage } from "next";
import { UseCalculationsReturn, getAction } from "@/service";
import { ActionPage as ActionContainer } from "@/containers";
import { ActionI } from "@/lib/types";

type GetServerSidePropsQ = {
  actionId: string;
};

type GetServerSidePropsData = {
  query: { id: string | null };
  action: ActionI | null;
  amounts: UseCalculationsReturn | null;
};

type GetServerSidePropsReturn = {
  props: GetServerSidePropsData;
};

export const getServerSideProps: GetServerSideProps<
  GetServerSidePropsData,
  GetServerSidePropsQ
> = async (context): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.params || {};
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
    return {
      props: {
        query: { id: null },
        action: null,
        amounts: null,
      },
    };
  }
};

const ActionPage: NextPage<
  InferGetStaticPropsType<typeof getServerSideProps>
> = ({ action, amounts, query }) => {
  return <ActionContainer query={query} action={action} amounts={amounts} />;
};

export default ActionPage;
