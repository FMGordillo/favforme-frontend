import Image from "next/image";
import { FunctionComponent } from "react";
import { Button } from "@/components";
import { Container, Text, Title, Subtitle } from "./styles";

const PartnerSection: FunctionComponent = () => {
  return (
    <Container id="partners">
      <Subtitle>La oportunidad es ahora</Subtitle>
      <Title>Formá parte del cambio</Title>
      <Image
        src="/images/oficina.png"
        alt="Personas en oficina"
        width={500}
        height={250}
      />
      <Text>
        Hacé tu aporte, dando futuro
        <br />a quienes más lo necesitan
      </Text>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://drive.google.com/drive/folders/19uDWgV5pV9ktBCOavcf-dwg5m8qXLYHM?usp=sharing"
      >
        <Button color="secondary">Ver más información</Button>
      </a>
    </Container>
  );
};

export { PartnerSection as Business };
