import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { UseCalculationsReturn, getAction, getActions } from "@/service";
import { ActionPage as ActionContainer } from "@/containers";
import { ActionI } from "@/lib/types";
import { GET_ID_ACTIONS } from "@/service/action/queries";

interface GetServerSidePropsReturn {
  props: {
    query: { id: string | null };
    action: ActionI | null;
    amounts: UseCalculationsReturn | null;
  };
}

export const getStaticProps = async (
  context: GetStaticProps
): Promise<GetServerSidePropsReturn> => {
  // @ts-ignore
  const { actionId } = context.params;
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

export async function getStaticPaths() {
  const actions = await getActions(GET_ID_ACTIONS);
  return {
    paths: actions.map((action) => ({ params: { actionId: action.id } })),
    fallback: false,
  };
}

const ActionPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  action,
  amounts,
  query,
}) => {
  return <ActionContainer query={query} action={action} amounts={amounts} />;
};

export default ActionPage;
