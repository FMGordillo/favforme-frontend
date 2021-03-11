import { NavBar } from "@/components";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header<{ isIndex?: boolean }>`
  display: fixed;
  background-size: cover;
  background-position: center;
  background-image: url("/images/plato_de_comida.png");
  height: ${({ isIndex }) => (isIndex ? "400px" : "300px")};
  width: 100vw;
  overflow: hidden;

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

export interface HeaderProps {
  isIndex?: boolean;
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
}

const Header: FunctionComponent<HeaderProps> = ({
  isIndex,
  title,
  subtitle,
}) => {
  return (
    <>
      <NavBar />
      <HeaderContainer isIndex={isIndex}>
        <TextContainer>
          <Title>
            {title || (
              <span>
                Estás en
                <br />
                FavForMe
              </span>
            )}
          </Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TextContainer>
      </HeaderContainer>
    </>
  );
};

export { Header };
