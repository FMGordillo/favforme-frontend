import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button, Container, Text, Title } from "../styles";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}em;
`;

const MarginlessTitle = styled(Title)`
  text-align: center;
  margin-top: 0;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-weight: 400;
  margin-bottom: 0.5em;
`;

const StyledText = styled(Text)`
  text-align: center;
`;

const Business: FunctionComponent = () => {
  return (
    <StyledContainer id="partners">
      <Subtitle>La oportunidad es ahora</Subtitle>
      <MarginlessTitle>Formá parte del cambio</MarginlessTitle>
      <Image
        src="/images/oficina.png"
        alt="Personas en oficina"
        width={500}
        height={250}
      />
      <StyledText>
        Hacé tu aporte, dando futuro
        <br />a quienes más lo necesitan
      </StyledText>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://drive.google.com/drive/folders/19uDWgV5pV9ktBCOavcf-dwg5m8qXLYHM?usp=sharing"
      >
        <Button color="secondary">Ver más información</Button>
      </a>
    </StyledContainer>
  );
};

export { Business };
