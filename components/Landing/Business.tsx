import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button, Title } from "./styles";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MarginlessTitle = styled(Title)`
  margin-top: 0;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  margin-bottom: 0.5em;
`;

const Business: FunctionComponent = () => {
  return (
    <Container>
      <Subtitle>La oportunidad es ahora</Subtitle>
      <MarginlessTitle>Formá parte del cambio</MarginlessTitle>
      <Image
        src="/images/oficina.png"
        alt="Personas en oficina"
        width={500}
        height={250}
      />
      <p>
        Hacé tu aporte, dando futuro
        <br />a quienes más lo necesitan
      </p>
      <Button color="secondary">Agregar a mi empresa</Button>
    </Container>
  );
};

export { Business };
