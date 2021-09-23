import { FunctionComponent, useEffect, useState } from "react";
import { HighlightText, ODSButton, ODSContainer, ODSLogo } from "./styles";
import { Container } from "@/components";
import Image from "next/image";
import { event } from "@/lib/gtag";

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

export const ODSMain: FunctionComponent = () => {
  const { length: sdgLength } = sdg;
  const [iCurrent, setICurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setICurrent((prev) => (prev >= sdgLength - 1 ? 0 : prev + 1));
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, [iCurrent, sdgLength]);

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ODSLogo>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www1.undp.org/content/undp/es/home/sustainable-development-goals.html"
        >
          <Image
            width={360}
            height={40}
            src="/images/ods.webp"
            alt="ODS Logo"
          />
        </a>
        <Container>
          <HighlightText>
            El equipo de FavForMe se especializó en los{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www1.undp.org/content/undp/es/home/sustainable-development-goals.html"
            >
              Objetivos de Desarrollo Sustentables (ODS)
            </a>{" "}
            definidos por la Organización de las Naciones Unidas y ha
            desarrollado mejores prácticas para lograr alcanzarlos
          </HighlightText>
        </Container>
      </ODSLogo>
      <ODSContainer>
        <div className="img smallest">
          <Image
            width={150}
            height={150}
            src={generateImageUrl(getItem(-3))}
            alt="Carousel image (smallest on the left)"
          />
        </div>
        <div className="img smaller">
          <Image
            width={150}
            height={150}
            src={generateImageUrl(getItem(-2))}
            alt="Carousel image (smaller on the left)"
          />
        </div>
        <div className="img small">
          <Image
            width={150}
            height={150}
            src={generateImageUrl(getItem(-1))}
            alt="Carousel image (small on the left)"
          />
        </div>
        <div>
          <Image
            width={150}
            height={150}
            alt="Carousel image"
            src={generateImageUrl(sdg[iCurrent])}
          />
        </div>
        <div className="img small">
          <Image
            width={150}
            height={150}
            src={generateImageUrl(getItem(1))}
            alt="Carousel image (small on the right)"
          />
        </div>
        <div className="img smaller">
          <Image
            width={150}
            height={150}
            src={generateImageUrl(getItem(2))}
            alt="Carousel image (smaller on the right)"
          />
        </div>
        <div className="img smallest">
          <Image
            width={150}
            height={150}
            src={generateImageUrl(getItem(3))}
            alt="Carousel image (smallest on the right)"
          />
        </div>
      </ODSContainer>
      <ODSButton
        color="#027aa8"
        hoverColor="#003f57"
        target="_blank"
        rel="noreferrer noopener"
        href="https://www1.undp.org/content/undp/es/home/sustainable-development-goals.html"
        onClick={() =>
          event({
            action: "click_aprender_sobre_ods",
            category: "ods",
            value: 1,
          })
        }
      >
        APRENDER SOBRE ODS
      </ODSButton>
    </div>
  );
};
