import { Button, FullPageLoading, Layout, Title } from "@/components";
import { Container } from "../styles";
import { DonationI } from "@/lib/types";
import Image from "next/image";
import { NextPage } from "next";
import router from "next/router";

type DonationSuccessContainerProps = {
  loading: boolean;
  donation: DonationI | null;
};

export const DonationSuccessContainer: NextPage<DonationSuccessContainerProps> = ({
  loading,
  donation,
}) => {
  return (
    <Layout header title="Donación exitosa">
      {loading && <FullPageLoading />}
      {!loading && (
        <Container>
          <Title>¡Felicitaciones!</Title>
          <p>
            Se acredit&oacute; tu donaci&oacute;n de{" "}
            <strong>${donation?.amount}.-</strong>
            <br />
            En la acci&oacute;n <strong>{donation?.action?.title}</strong>
          </p>
          <Image
            alt="Personas celebrando"
            src="/images/high_five.svg"
            width={350}
            height={400}
          />
          <p>
            Gracias a tu ayuda estamos un paso m&aacute;s cerca de alcanzar la
            <br />
            meta para que{" "}
            <strong>
              {donation?.action?.organization.name} pueda cumplir su objetivo.
            </strong>
          </p>
          <Title>¡Muchas gracias!</Title>
          <Button onClick={() => router.push("/")}>Volver</Button>
        </Container>
      )}
    </Layout>
  );
};
