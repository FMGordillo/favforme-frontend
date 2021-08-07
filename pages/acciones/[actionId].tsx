import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionPage as ActionContainer } from "@/containers";
import { ActionI } from "@/lib/types";
import { getAction, useCalculations } from "@/hooks";

interface GetServerSidePropsReturn {
  props: {
    query: any;
    action: ActionI | null;
  };
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;

  if (typeof actionId === "string") {
    const action = await getAction({ id: actionId });
    return {
      props: {
        query: { id: actionId },
        action,
      }, // will be passed to the page component as props
    };
  } else {
    return {
      props: {
        query: {
          id: actionId,
        },
        action: null,
      },
    };
  }
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ action, query }) => {
  // TODO: Move this into the "getAction" method
  const amounts = useCalculations(action);
  return <ActionContainer query={query} action={action} amounts={amounts} />;
};

export default ActionPage;
