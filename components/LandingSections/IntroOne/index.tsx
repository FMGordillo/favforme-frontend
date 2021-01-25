import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { Text, Title } from "../../styles";
import {
  LeftHandImage,
  Main,
  ODSContainer,
  ODSLogo,
  RightHandImage,
  TextContainer,
} from "./styles";

const sdg = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
];

const IntroOneSection: FunctionComponent = () => {
  const sdgLength = sdg.length;
  const [iCurrent, setICurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setICurrent((prev) => (prev >= sdgLength - 1 ? 0 : prev + 1));
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, [iCurrent, sdgLength]);

  return (
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
          todos alcanzar metas increíbles. Sé parte de los OBJETIVOS DE
          DESARROLLO SOSTENIBLES 2015-2030 propuestos por la ONU
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
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${sdg[iCurrent]}.png`}
          />
        </div>
      </ODSContainer>
    </Main>
  );
};

export { IntroOneSection as IntroOne };
