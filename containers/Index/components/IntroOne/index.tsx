import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { Container, Text, Title } from "@/components/styles";
import {
  LeftHandImage,
  Main,
  ODSContainer,
  ODSLogo,
  RightHandImage,
  HighlightText,
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

  const getItem = (position: number) => {
    const newPosition = iCurrent + position;
    if (newPosition >= sdgLength) {
      return sdg[newPosition - sdgLength];
    } else if (newPosition < 0) {
      return sdg[newPosition + sdgLength];
    }
    return sdg[newPosition];
  };

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
          src="/images/mano-02.svg"
          alt="Mano izquierda"
        />
      </LeftHandImage>
      <TextContainer>
        <Title>
          SOMOS LA PRIMERA PLATAFORMA DE CROWDFUNDING SOCIAL DE LATINOAMÉRICA
        </Title>
        <Text>
          En FavForMe creamos un espacio que ayuda a las ONGs a conseguir los
          recursos necesarios para realizar acciones de impacto social a través
          de crowdfunding
        </Text>
      </TextContainer>
      <RightHandImage>
        <Image
          width={340}
          layout="fixed"
          height={330}
          src="/images/mano-01.svg"
          alt="Mano derecha"
        />
      </RightHandImage>
      <ODSLogo>
        <Image width={360} height={40} src="/images/ods.png" alt="ODS Logo" />
        <Container>
          <HighlightText>
            El equipo de FavForMe se especializó en los Objetivos de Desarrollo
            Sustentables (ODS) definidos por la Organización de las Naciones
            Unidas y ha desarrollado mejores prácticas para lograr alcanzarlos
          </HighlightText>
        </Container>
      </ODSLogo>
      <ODSContainer>
        <div className="img smallest">
          <Image
            width={150}
            height={150}
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${getItem(-3)}.png`}
          />
        </div>
        <div className="img smaller">
          <Image
            width={150}
            height={150}
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${getItem(-2)}.png`}
          />
        </div>
        <div className="img small">
          <Image
            width={150}
            height={150}
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${getItem(-1)}.png`}
          />
        </div>
        <div>
          <Image
            width={150}
            height={150}
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${sdg[iCurrent]}.png`}
          />
        </div>
        <div className="img small">
          <Image
            width={150}
            height={150}
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${getItem(1)}.png`}
          />
        </div>
        <div className="img smaller">
          <Image
            width={150}
            height={150}
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${getItem(2)}.png`}
          />
        </div>
        <div className="img smallest">
          <Image
            width={150}
            height={150}
            // TODO: Cambiar a "es"
            src={`/images/ods-images/sdg-en-${getItem(3)}.png`}
          />
        </div>
      </ODSContainer>
    </Main>
  );
};

export { IntroOneSection as IntroOne };
