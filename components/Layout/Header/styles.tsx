import { Button as BaseButton } from "@/components";
import styled from "styled-components";

export const HeaderContainer = styled.header<{ isIndex?: boolean }>`
  background-size: cover;
  background-position: center;
  background-image: url("/images/plato_de_comida.png");
  height: ${({ isIndex }) => (isIndex ? "660px" : "400px")};
  width: 100vw;
  overflow: hidden;

  /* Workaround? */
  display: table-cell;
  vertical-align: bottom;
  padding-bottom: 48px;

  transition: height 300ms;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: ${({ isIndex }) => (isIndex ? "400px" : "300px")};
  }
`;
export const TextContainer = styled.div<{ isIndex?: boolean }>`
  color: white;
  transform: translateY(-64px);
  padding: ${({ isIndex }) => (!isIndex ? "0" : `0 0 0 160px`)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0;
    ${({ isIndex }) => (isIndex ? "padding-left: 48px;" : "")}
  }
`;
export const Title = styled.h1<{ receivedText?: boolean; isIndex?: boolean }>`
  margin: 0;
  font-size: 3.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  width: ${({ isIndex }) => (isIndex ? "75vw" : "inherit")};
  text-align: ${({ isIndex }) => (isIndex ? "left" : "center")};

  mark {
    color: white;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: ${({ isIndex }) => (isIndex ? "100%" : "inherit")};
  }
`;
export const Subtitle = styled.h2`
  font-family: abel, sans-serif;
  margin-top: 0;
  font-weight: 400;
`;

export const Button = styled(BaseButton)`
  width: 200px;
  margin: 24px 0;
  font-weight: bold;
`;
