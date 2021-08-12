import { Container, ImagesContainer, StyledTitle } from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";
import { event } from "@/lib/gtag";

const AlliancesSection: FunctionComponent = () => {
  const trackEvent = (businessName: string) => {
    event({
      action: `click_logo_${businessName}`,
      category: "empresas",
      value: 1,
    });
  };
  return (
    <Container id="brands">
      <StyledTitle>Nuestros aliados</StyledTitle>
      <ImagesContainer>
        <a
          target="_blank"
          href="https://trilogylab.com/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Trilogy Lab")}
        >
          <Image src="/images/alianzas_01.png" width={122} height={122} />
        </a>
        <a
          target="_blank"
          href="https://fi.co/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Founder Institute")}
        >
          <Image src="/images/alianzas_02.png" width={269} height={102} />
        </a>
        <a
          target="_blank"
          href="https://www.blahbox.net/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Blahbox")}
        >
          <Image src="/images/alianzas_03.png" width={122} height={122} />
        </a>
        <a
          target="_blank"
          href="https://gorather.com/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Rather")}
        >
          <Image src="/images/alianzas_04.png" width={270} height={102} />
        </a>
        <a
          target="_blank"
          href="http://www.delanada.org/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("De La Nada Asociación Civil")}
        >
          <Image src="/images/alianzas_05.png" width={122} height={122} />
        </a>
        <a
          target="_blank"
          href="https://fi.co/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Founder Institute")}
        >
          <Image src="/images/alianzas_06.png" width={122} height={122} />
        </a>
        <a
          target="_blank"
          href="https://hospicemadreteresa.org.ar"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Hospice Madre Teresa")}
        >
          <Image src="/images/alianzas_07.png" width={142} height={103} />
        </a>
      </ImagesContainer>
    </Container>
  );
};

export { AlliancesSection };
