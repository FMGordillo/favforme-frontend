import { Button, Text } from "@/components";
import {
  LeftHandImage,
  Main,
  RightHandImage,
  TextContainer,
  Title,
  WhitepaperContainer,
} from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const IntroOneSection: FunctionComponent = () => {
  return (
    <>
      <Main>
        <LeftHandImage>
          <Image
            width={350}
            height={330}
            layout="fixed"
            src="/images/mano-01.svg"
            alt="Mano izquierda"
          />
        </LeftHandImage>
        <TextContainer>
          <Title>
            SOMOS LA <strong>PRIMERA</strong> PLATAFORMA DE{" "}
            <strong>CROWDFUNDING SOCIAL</strong> DE LATINOAMÉRICA
          </Title>
          <Text>
            En FavForMe creamos un espacio que ayuda a las ONGs a conseguir los
            recursos necesarios para realizar acciones de impacto social a
            través de crowdfunding
          </Text>
        </TextContainer>
        <RightHandImage>
          <Image
            width={340}
            layout="fixed"
            height={330}
            src="/images/mano-02.svg"
            alt="Mano derecha"
          />
        </RightHandImage>
      </Main>
      <WhitepaperContainer>
        <Link passHref href="/whitepaper">
          <a>
            <Button textColor="white">Ver Whitepaper</Button>
          </a>
        </Link>
      </WhitepaperContainer>
    </>
  );
};

export { IntroOneSection as IntroOne };
