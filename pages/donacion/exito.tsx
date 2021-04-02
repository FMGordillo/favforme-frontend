import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FullPageLoading, Layout } from "../../components";

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

const DonationSuccessPage: NextPage<
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
    <Layout header title="Donacion exitosa">
      {loading && <FullPageLoading />}
      {!loading && (
        <>
          <p>Muchas gracias por tu donacion</p>
        </>
      )}
    </Layout>
  );
};

export default DonationSuccessPage;
