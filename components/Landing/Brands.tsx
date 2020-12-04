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

const Brands: FunctionComponent = () => (
  <Container id="brands">
    <StyledTitle>Marcas que nos apoyan</StyledTitle>
    <ImagesContainer>
      <a
        target="_blank"
        href="https://trilogylab.com/"
        rel="noreferrer noopener"
      >
        <Image src="/images/marcas_01.png" width={186} height={186} />
      </a>
      <a target="_blank" href="https://fi.co/" rel="noreferrer noopener">
        <Image src="/images/marcas_02_cut.png" width={126} height={186} />
      </a>
      <a
        target="_blank"
        href="https://www.blahbox.net/"
        rel="noreferrer noopener"
      >
        <Image src="/images/marcas_03.png" width={186} height={186} />
      </a>
      <a target="_blank" href="https://gorather.com/" rel="noreferrer noopener">
        <Image src="/images/marcas_04_cut_new.png" width={176} height={146} />
      </a>
    </ImagesContainer>
  </Container>
);

export { Brands };
