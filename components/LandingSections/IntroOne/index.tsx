import Image from "next/image";
import { FunctionComponent } from "react";
import { Text, Title } from "../../styles";
import {
  LeftHandImage,
  Main,
  ODSContainer,
  ODSLogo,
  RightHandImage,
  TextContainer,
} from "./styles";

const IntroOneSection: FunctionComponent = () => (
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
        diferentes ACCIONES de forma simple, clara y segura, logrando entre
        todos alcanzar metas increíbles. Sé parte de los OBJETIVOS DE DESARROLLO
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
          src="/images/ods-images/sdg-en-17.png"
        />
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
        {/* <Image
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
        /> */}
      </div>
    </ODSContainer>
  </Main>
);

export { IntroOneSection as IntroOne };
