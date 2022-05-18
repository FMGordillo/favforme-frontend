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
          <Image
            alt="Trilogy Lab logo"
            src="/images/alianzas_01.png"
            width={122}
            height={122}
          />
        </a>
        <a
          target="_blank"
          href="https://fi.co/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Founder Institute")}
        >
          <Image
            alt="Founder Institute logo"
            src="/images/alianzas_02.png"
            width={269}
            height={102}
          />
        </a>
        <a
          target="_blank"
          href="https://www.blahbox.net/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Blahbox")}
        >
          <Image
            alt="Blahbox logo"
            src="/images/alianzas_03.png"
            width={122}
            height={122}
          />
        </a>
        <a
          target="_blank"
          href="https://ratherlabs.com/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("RatherLabs")}
        >
          <Image
            alt="Ratherlabs logo"
            src="/images/alianzas_04.jpeg"
            width={100}
            height={100}
          />
        </a>
        <a
          target="_blank"
          href="http://www.delanada.org/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("De La Nada Asociación Civil")}
        >
          <Image
            alt="De La Nada Asociación Civil logo"
            src="/images/alianzas_05.png"
            width={122}
            height={122}
          />
        </a>
        <a
          target="_blank"
          href="https://merenderootromundo.wixsite.com/otromundodelviso"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Otro Mundo Centro Comunitario")}
        >
          <Image
            alt="Otro Mundo Centro Comunitario logo"
            src="/images/alianzas_06.png"
            width={122}
            height={122}
          />
        </a>
        <a
          target="_blank"
          href="https://hospicemadreteresa.org.ar"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Hospice Madre Teresa")}
        >
          <Image
            alt="Hospice Madre Teresa logo"
            src="/images/alianzas_07.png"
            width={142}
            height={103}
          />
        </a>
        <a
          target="_blank"
          href="http://adelante.org.ar/"
          rel="noreferrer noopener"
          onClick={() => trackEvent("Asociación Civil Adelante")}
        >
          <Image
            alt="Asociación Civil Adelante"
            src="/images/alianzas_08.png"
            width={122}
            height={122}
          />
        </a>
      </ImagesContainer>
    </Container>
  );
};

export { AlliancesSection };
