import { Container, Layout, Title } from "@/components";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Action } from "@/lib/types";
import { DonationContainer } from "@/containers";
import Image from "next/image";
import { getAction } from "@/hooks";

interface GetServerSidePropsReturn {
  props: {
    query: { id?: string };
    action: Action | null;
  };
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> {
  const { action } = context.query;
  if (typeof action === "string") {
    const { data } = await getAction({ actionId: action });
    return {
      props: {
        query: {
          id: action,
        },
        action: data,
      },
    };
  } else {
    return {
      props: {
        query: { id: undefined },
        action: null,
      },
    };
  }
}

const DonationPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query, action }) => {
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
    <DonationContainer user={undefined} query={query} action={action} />
  );
};

export default DonationPage;
