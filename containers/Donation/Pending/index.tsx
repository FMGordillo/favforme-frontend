import { Button, Layout, Title } from "@/components";
import { Container } from "./styles";
import Image from "next/image";
import { NextPage } from "next";
import router from "next/router";

export const DonationPendingContainer: NextPage = () => {
  return (
    <Layout header title="Donación pendiente">
      <Container>
        <Title>Donación pendiente</Title>
        <Image
          alt="Persona observando proceso de subida de archivos"
          src="/images/progress_indicator.svg"
          width={480}
          height={400}
        />
        <p>
          Tu operación está siendo procesada,
          <br />
          te vamos a mantener informado del estado
        </p>
        <Button onClick={() => router.push("/")}>Volver</Button>
      </Container>
    </Layout>
  );
};
