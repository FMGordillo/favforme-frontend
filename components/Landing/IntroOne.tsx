import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Container, Text, Title } from "../styles";

const Main = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    "left-image text right-image"
    "ods ods ods"
    "ods-container ods-container ods-container";
    
    /* TODO: Queda asi porque se ve horrible en un tamaño intermedio. La contra del static */
    @media(max-width: 1070px) {
    grid-template-areas:
      "text text text"
      "ods ods ods"
      "ods-container ods-container ods-container";
    & > :first-child {
      display: none !important;
    }
    & > :nth-child(3) {
      display: none !important;
    }
`;

const LeftHandImage = styled.div`
  grid-area: left-image;
`;
const RightHandImage = styled.div`
  grid-area: right-image;
`;

const TextContainer = styled.div`
  grid-area: text;
  align-self: center;
  text-align: center;
  margin: 0 ${({ theme }) => theme.spacing(1)}em;
  & > p {
    text-align: justify;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    margin: 0 ${({ theme }) => theme.spacing(2)}em;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(1)}em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

const ODSLogo = styled.div`
  grid-area: ods;
  justify-self: center;
  margin: 0 ${({ theme }) => theme.spacing(0.25)}em;
  margin-bottom: 1.25em;
`;

const ODSContainer = styled(Container)`
  grid-area: ods-container;
  text-align: center;
`;

const IntroOne: FunctionComponent = () => (
  <Main>
    <LeftHandImage>
      <Image
        width={350}
        height={330}
        layout="fixed"
        src="/images/mano-1.png"
        alt="Mano izquierda"
      />
    </LeftHandImage>
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
    <RightHandImage>
      <Image
        width={340}
        layout="fixed"
        height={330}
        src="/images/mano-2.png"
        alt="Mano derecha"
      />
    </RightHandImage>
    <ODSLogo>
      <Image width={360} height={40} src="/images/ods.png" alt="ODS Logo" />
    </ODSLogo>
    <ODSContainer>
      <div>
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-01.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-02.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-03.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-04.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-05.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-06.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-07.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-08.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-09.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-10.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-11.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-12.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-13.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-14.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-15.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-16.png"
        />
        <Image
          width={150}
          height={150}
          src="/images/ods-images/sdg-en-17.png"
        />
      </div>
    </ODSContainer>
  </Main>
);

export { IntroOne };
