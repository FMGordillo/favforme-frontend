import { Button, Layout, Title } from "@/components";
import { Container } from "../styles";
import Image from "next/image";
import { NextPage } from "next";
import React from "react";
import router from "next/router";

export const DonationErrorContainer: NextPage = () => {
  return (
    <Layout header title="Donación fallida">
      <Container>
        <Title>¡Whoops!</Title>
        <p>Lo sentimos, tu operación no pudo ser completada</p>
        <Image
          alt="Persona con brazos levantados, y un cartel con el mensaje 'Error, solicitud fallida'"
          src="/images/error_request.svg"
          width={350}
          height={400}
        />
        <p>
          ¡No te preocupes, vamos a solucionarlo juntos!
          <br />
          <strong>
            Vamos a estar contactándote por correo electrónico a la brevedad.
          </strong>
          <br />
          <br />
          Desde ya te pedimos disculpas por las molestias ocasionadas.
        </p>
        <Button onClick={() => router.push("/")}>Volver</Button>
      </Container>
    </Layout>
  );
};
