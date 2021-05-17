import { FunctionComponent } from "react";
import Image from "next/image";
import { Button, Title } from "@/components";
import { ImageContainer, Container } from "./styles";

const RSE: FunctionComponent = () => {
  return (
    <Container id="rse">
      <ImageContainer>
        <Image
          width="300"
          height="300"
          src="/images/Business analytics-bro.svg"
        />
      </ImageContainer>
      <div className="text">
        <Title>Tu empresa con R.S.E.</Title>
        <p>
          Existen muchas pequeñas y medianas empresas que, si bien no cuentan
          con un área específica dedicada a la responsabilidad social; tienen
          interés de crear o participar de este tipo de programas ofreciendo
          productos, servicios, horas de apoyo y hasta fondos
        </p>
        <Button disabled>Sumá tu empresa</Button>
      </div>
    </Container>
  );
};

export { RSE };
