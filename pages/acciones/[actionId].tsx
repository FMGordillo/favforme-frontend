import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getAction, useAction } from "@/hooks";
import { ActionPage as ActionContainer } from "@/containers";

interface GetServerSidePropsReturn {
  props: {
    query: any;
  };
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;
  console.log("TE PASO ACTIONID", actionId);
  const data = await getAction({ id: actionId });
  console.log(data);

  return {
    props: {
      query: { id: actionId },
    }, // will be passed to the page component as props
  };
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query }) => {
  const { data, amounts, isValidating } = useAction({ query });
  const { action } = data || {};

  return (
    <ActionContainer
      query={query}
      action={action}
      amounts={amounts}
      loading={isValidating}
    />
  );
};

export default ActionPage;
