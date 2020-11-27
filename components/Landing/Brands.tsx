import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Title } from "./styles";

const Container = styled.section``;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-height: 200px;
  & > * {
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
      <Image src="/images/marcas_01.png" width={186} height={186} />
      <Image src="/images/marcas_02_cut.png" width={126} height={186} />
      <Image src="/images/marcas_03.png" width={186} height={186} />
      <Image src="/images/marcas_04_cut_new.png" width={176} height={146} />
    </ImagesContainer>
  </Container>
);

export { Brands };
