import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Title } from "../styles";

const Container = styled.section`
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & > * {
    margin: ${({ theme }) => theme.spacing(0.1)}em !important;
    max-width: 100%;
    align-self: center;
    text-align: center;
  }
`;

const StyledTitle = styled(Title)`
  text-align: center;
`;

const AlliancesSection: FunctionComponent = () => (
  <Container id="brands">
    <StyledTitle>alianzas que nos apoyan</StyledTitle>
    <ImagesContainer>
      <a
        target="_blank"
        href="https://trilogylab.com/"
        rel="noreferrer noopener"
      >
        <Image src="/images/alianzas_01.png" width={102} height={102} />
      </a>
      <a target="_blank" href="https://fi.co/" rel="noreferrer noopener">
        <Image src="/images/alianzas_02.png" width={269} height={102} />
      </a>
      <a
        target="_blank"
        href="https://www.blahbox.net/"
        rel="noreferrer noopener"
      >
        <Image src="/images/alianzas_03.png" width={102} height={102} />
      </a>
      <a target="_blank" href="https://gorather.com/" rel="noreferrer noopener">
        <Image src="/images/alianzas_04.png" width={270} height={102} />
      </a>
    </ImagesContainer>
    <ImagesContainer>
      <a
        target="_blank"
        href="http://www.delanada.org/"
        rel="noreferrer noopener"
      >
        <Image src="/images/alianzas_05.png" width={102} height={102} />
      </a>
      {/* <a target="_blank" href="https://fi.co/" rel="noreferrer noopener"> */}
      <Image src="/images/alianzas_06.png" width={102} height={102} />
      {/* </a> */}
    </ImagesContainer>
  </Container>
);

export { AlliancesSection };
