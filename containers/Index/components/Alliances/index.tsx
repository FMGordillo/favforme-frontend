import Image from "next/image";
import { FunctionComponent } from "react";
import { Container, ImagesContainer, StyledTitle } from "./styles";

const AlliancesSection: FunctionComponent = () => (
  <Container id="brands">
    <StyledTitle>Nuestros aliados</StyledTitle>
    <ImagesContainer>
      <a
        target="_blank"
        href="https://trilogylab.com/"
        rel="noreferrer noopener"
      >
        <Image src="/images/alianzas_01.png" width={122} height={122} />
      </a>
      <a target="_blank" href="https://fi.co/" rel="noreferrer noopener">
        <Image src="/images/alianzas_02.png" width={269} height={102} />
      </a>
      <a
        target="_blank"
        href="https://www.blahbox.net/"
        rel="noreferrer noopener"
      >
        <Image src="/images/alianzas_03.png" width={122} height={122} />
      </a>
      <a target="_blank" href="https://gorather.com/" rel="noreferrer noopener">
        <Image src="/images/alianzas_04.png" width={270} height={102} />
      </a>
      <a
        target="_blank"
        href="http://www.delanada.org/"
        rel="noreferrer noopener"
      >
        <Image src="/images/alianzas_05.png" width={122} height={122} />
      </a>
      <a target="_blank" href="https://fi.co/" rel="noreferrer noopener">
        <Image src="/images/alianzas_06.png" width={122} height={122} />
      </a>
    </ImagesContainer>
  </Container>
);

export { AlliancesSection };
