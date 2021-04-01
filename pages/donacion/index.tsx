import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { withAuthUser } from "next-firebase-auth";
import { DonationContainer } from "@/containers";
import { useAction, useUser } from "@/hooks";

interface GetServerSidePropsReturn {
  props: {
    query: { id?: string };
  };
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> {
  const { action } = context.query;
  return {
    props: {
      query: { id: typeof action === "string" ? action : undefined },
    },
  };
}

const DonationPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query }) => {
  const { user } = useUser();
  const { data, isValidating } = useAction({ query });

  const { action } = data ?? {};

  return (
    <DonationContainer
      user={user}
      query={query}
      action={action}
      loading={isValidating}
    />
  );
};

export default withAuthUser()(DonationPage);
