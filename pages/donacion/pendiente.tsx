import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { Layout, FullPageLoading } from "components";
import { useEffect, useState } from "react";

interface GetServerSidePropsReturn {
  props: {
    query: { id?: string };
  };
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> {
  const { donationId } = context.query;
  return {
    props: {
      query: { id: typeof donationId === "string" ? donationId : undefined },
    },
  };
}

const PendingPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!query.id) {
      router.push("/");
    } else {
      setLoading(false);
      // TODO: No se?
    }
  }, [query.id, router]);

  return (
    <Layout>
      {loading && <FullPageLoading />}
      {!loading && (
        <>
          <p>Tu donacion esta pendiente</p>
        </>
      )}
    </Layout>
  );
};

export default PendingPage;
