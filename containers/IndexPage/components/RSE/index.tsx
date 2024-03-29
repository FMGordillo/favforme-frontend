import { Button, Container, ImageContainer } from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";
import { Title } from "@/components";
import { event } from "@/lib/gtag";

const RSE: FunctionComponent = () => {
  return (
    <Container id="rse">
      <ImageContainer>
        <Image
          width="300"
          height="300"
          alt="Personas trabajando en una oficina"
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
        <Button
          target="_blank"
          hoverTextColor="black"
          rel="noreferrer noopener"
          href={`mailto:hello@favforme.com?subject=${encodeURIComponent(
            "Quiero sumar mi empresa"
          )}`}
          onClick={() => {
            event({
              action: "boton_sumar_mi_empresa",
              category: "empresas",
              value: 1,
            });
          }}
        >
          Sum&aacute; tu empresa
        </Button>
      </div>
    </Container>
  );
};

export { RSE };
