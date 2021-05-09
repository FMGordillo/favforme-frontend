import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { Container, Text, Title } from "@/components";
import {
  LeftHandImage,
  Main,
  ODSContainer,
  ODSLogo,
  RightHandImage,
  HighlightText,
  TextContainer,
  ODSButton,
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

  const generateImageUrl = (index: string) =>
    `/images/ods-images/ods-es-${index}.png`;

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
          <Image width={150} height={150} src={generateImageUrl(getItem(-3))} />
        </div>
        <div className="img smaller">
          <Image width={150} height={150} src={generateImageUrl(getItem(-2))} />
        </div>
        <div className="img small">
          <Image width={150} height={150} src={generateImageUrl(getItem(-1))} />
        </div>
        <div>
          <Image
            width={150}
            height={150}
            src={generateImageUrl(sdg[iCurrent])}
          />
        </div>
        <div className="img small">
          <Image width={150} height={150} src={generateImageUrl(getItem(1))} />
        </div>
        <div className="img smaller">
          <Image width={150} height={150} src={generateImageUrl(getItem(2))} />
        </div>
        <div className="img smallest">
          <Image width={150} height={150} src={generateImageUrl(getItem(3))} />
        </div>
      </ODSContainer>
      <ODSButton
        color="#027aa8"
        hoverColor="#003f57"
        target="_blank"
        rel="noreferrer noopener"
        href="https://www1.undp.org/content/undp/es/home/sustainable-development-goals.html"
      >
        APRENDER SOBRE ODS
      </ODSButton>
    </Main>
  );
};

export { IntroOneSection as IntroOne };
