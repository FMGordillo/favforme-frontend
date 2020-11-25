import { FunctionComponent } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  max-height: 731px;
`;
const PlatoDeComidaImg = styled.img`
  border-radius: 0 0 100% 100%/0 0 25% 25%;
`;
const TextContainer = styled.div``;
const Title = styled.h1`
  font-size: 3.5em;
`;
const Subtitle = styled.h2`
  font-family: abel, sans-serif;
`;

const Header: FunctionComponent = () => {
  return (
    <>
      <HeaderContainer>
        {/* <PlatoDeComidaImg src="/images/plato_de_comida.png" /> */}
        <TextContainer>
          <Title>Estás en FavForMe</Title>
          <Subtitle>No dejamos a nadie atrás</Subtitle>
        </TextContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
