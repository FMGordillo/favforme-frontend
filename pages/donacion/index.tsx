import { Container, Layout, Title } from "@/components";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionI } from "@/lib/types";
import { DonationContainer } from "@/containers";
import Image from "next/image";
import { getAction } from "@/hooks";

interface GetServerSidePropsReturn {
  props: {
    query: { id?: string };
    action: ActionI | null;
  };
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> {
  const { action: actionId } = context.query;
  const action = await getAction({ id: actionId });
  return {
    props: {
      query: { id: typeof actionId === "string" ? actionId : undefined },
      action,
    },
  };
}

const DonationPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ action, query }) => {
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
