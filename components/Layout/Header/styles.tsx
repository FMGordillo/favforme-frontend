import styled from "styled-components";

export const HeaderContainer = styled.header<{ isIndex?: boolean }>`
  background-size: cover;
  background-position: center;
  background-image: url("/images/plato_de_comida.png");
  height: ${({ isIndex }) => (isIndex ? "600px" : "400px")};
  width: 100vw;
  overflow: hidden;

  /* Workaround? */
  display: table-cell;
  vertical-align: bottom;
  padding-bottom: 2em;

  transition: height 300ms;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: ${({ isIndex }) => (isIndex ? "400px" : "300px")};
  }
`;
export const TextContainer = styled.div<{ isIndex?: boolean }>`
  color: white;
  padding: ${({ theme, isIndex }) =>
    !isIndex ? "0" : `0 0 0 ${theme.spacing(2)}em`};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
    padding-left: 2em;
  }
`;
export const Title = styled.h1<{ receivedText?: boolean; isIndex?: boolean }>`
  margin: 0;
  font-size: 3.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  width: ${({ isIndex }) => (isIndex ? "75vw" : "inherit")};
  text-align: ${({ isIndex }) => (isIndex ? "left" : "center")};
`;
export const Subtitle = styled.h2`
  font-family: abel, sans-serif;
  margin-top: 0;
  font-weight: 400;
`;
