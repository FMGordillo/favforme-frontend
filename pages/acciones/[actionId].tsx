import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionPage as ActionContainer } from "@/containers";
import { getAction } from "@/hooks";

interface GetServerSidePropsReturn {
  props: {
    action: any;
  };
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query || {};
  try {
    //@ts-ignore
    const action = await getAction({ id: actionId });
    return {
      props: {
        action,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log("MY ERROR");
    return {
      props: {
        action: undefined,
      },
    };
  }
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ action }) => {
  // const { data, amounts, isValidating } = useAction({ query });
  // const { action } = data || {};

  return (
    <ActionContainer
      query={{ id: "ASDF" }}
      action={action}
      amounts={undefined}
      loading={false}
    />
  );
};

export default ActionPage;
