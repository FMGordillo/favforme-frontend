import { FunctionComponent } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: fixed;
  background-size: cover;
  background-position: center;
  background-image: url("/images/plato_de_comida.png");
  border-radius: 0 0 100% 100%/0 0 25% 25%;
  height: 400px;
  width: 100vw;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    border-radius: 0 0 50% 50%/0 0 25% 25%;
  }
  /* Workaround? */
  display: table-cell;
  vertical-align: bottom;
  padding-bottom: 2em;
`;
const TextContainer = styled.div`
  color: white;
  margin: 0 ${({ theme }) => theme.spacing(2)}em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0;
    padding-left: 2em;
  }
`;
const Title = styled.h1`
  margin: 0;
  font-size: 3.5em;
`;
const Subtitle = styled.h2`
  font-family: abel, sans-serif;
  margin-top: 0;
  font-weight: 400;
`;

const Header: FunctionComponent = () => {
  return (
    <>
      <HeaderContainer>
        <TextContainer>
          <Title>
            Estás en
            <br />
            FavForMe
          </Title>
          <Subtitle>No dejamos a nadie atrás</Subtitle>
        </TextContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
