import { useAction } from "@/hooks";
import { ActionPage as ActionContainer } from "@/containers";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

interface GetServerSidePropsReturn {
  props: {
    query: any;
  };
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;
  return {
    props: {
      query: { id: actionId },
    }, // will be passed to the page component as props
  };
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query }) => {
  const { data, amounts } = useAction({ query });
  const { action } = data || {};

  return <ActionContainer amounts={amounts} action={action} query={query} />;
};

export default ActionPage;
