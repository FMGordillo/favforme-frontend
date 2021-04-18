import { Layout, Title, Container } from "@/components";
import { useAction, useUser } from "@/hooks";
import { DonationContainer } from "@/containers";
import { event } from "@/lib/gtag";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { useEffect } from "react";
import { withAuthUser } from "next-firebase-auth";

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

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
      console.log("TRACKED");
      event({
        action: "unable_donation",
        category: "donation",
        label: `environment:production`,
        value: 0,
      });
    }
  }, []);

  const { action } = data ?? {};

  return process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? (
    <Layout header title="Donacion - No disponible">
      <Container center>
        <Title>Trabajo en proceso</Title>
        <Image src="/images/404.svg" width="500" height="500" />
        <p>Estamos desarrollando nuestro sistema de donaciones.</p>
        <p>
          Para realizar tu donación, por favor comunicate a{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={`mailto:hello@favforme.com?subject=${encodeURIComponent(
              action?.title ? `Donar accion: ${action?.title}` : "Donar"
            )}`}
          >
            hello@favforme.com
          </a>
        </p>
      </Container>
    </Layout>
  ) : (
    <DonationContainer
      user={user}
      query={query}
      action={action}
      loading={isValidating}
    />
  );
};

export default withAuthUser()(DonationPage);
