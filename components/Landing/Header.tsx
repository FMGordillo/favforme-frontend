import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Text, Title } from "./styles";

const Container = styled.section`
  display: grid;
  grid-template-areas:
    "left-image text right-image"
    ". ods .";
`;

const LeftHandImage = styled(Image)`
  grid-area: left-image;
`;
const RightHandImage = styled(Image)`
  grid-area: right-image;
`;

const TextContainer = styled.div`
  grid-area: text;
  align-self: center;
  text-align: center;
  max-width: 100%;
  margin: 0 6em;
`;

const ODSLogo = styled.div`
  grid-area: ods;
  justify-self: center;
`;

const Header: FunctionComponent = () => (
  <Container>
    <LeftHandImage
      width={350}
      height={330}
      src="/images/mano-1.png"
      alt="Mano izquierda"
    />
    <TextContainer>
      <Title>
        CREAMOS ACCIONES DE IMPACTO POSITIVO Y TRANSPARENTE CON TU EMPRESA
      </Title>
      <Text>
        FavForMe es la plataforma tecnológica perfecta, para generar
        Responsabilidad Social Empresarial con tu organización. Aportá a
        diferentes ACCIONES de forma simple, clara y segura, logranndo entre
        todos alcanzar metas increíbles. Sé parte de OBJETIVOS DE DESARROLLO
        SOSTENIBLES 2015-2030 propuestos por la ONU
      </Text>
    </TextContainer>
    <RightHandImage
      width={350}
      height={330}
      src="/images/mano-2.png"
      alt="Mano derecha"
    />
    <ODSLogo>
      <Image width={360} height={40} src="/images/ods.png" alt="ODS Logo" />
    </ODSLogo>
  </Container>
);

export { Header };
