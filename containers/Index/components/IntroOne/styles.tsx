import styled from "styled-components";
import { Button, Container } from "@/components";

export const HighlightText = styled.p`
  color: #027aa8;
  font-size: 1.25em;
  font-weight: 700;
  text-align: center !important;
  padding: 0 2em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em 0 2.5em;
  }
`;

export const Main = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    "left-image text right-image"
    "ods ods ods"
    "ods-container ods-container ods-container"
    ". button .";

  /* TODO: Queda asi porque se ve horrible en un tamaño intermedio. La contra del static */

  @media (max-width: 1070px) {
    grid-template-areas:
      "text text text"
      "ods ods ods"
      "ods-container ods-container ods-container"
      ". button .";
    & > :first-child {
      display: none !important;
    }
    & > :nth-child(3) {
      display: none !important;
    }
  }
`;

export const LeftHandImage = styled.div`
  grid-area: left-image;
`;
export const RightHandImage = styled.div`
  grid-area: right-image;
`;

export const TextContainer = styled.div`
  grid-area: text;
  align-self: center;
  text-align: center;
  margin: 0 ${({ theme }) => theme.spacing(0.5)}em;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin: 0 ${({ theme }) => theme.spacing(1)}em;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(1)}em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

export const ODSLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: ods;
  justify-self: center;
  margin: ${({ theme }) => theme.spacing(0.5)}em 0;
`;

export const ODSContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ods-container;

  & > * {
    margin: 0 0.5em;
    transition: all 500ms ease-in;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 4em 2em;
  }

  .img.smallest {
    width: 75px;
    opacity: 0.15;
    ${({ theme }) => theme.breakpoints.down("md")} {
      display: none;
    }
  }

  .img.smaller {
    width: 100px;
    opacity: 0.5;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      display: none;
    }
  }

  .img.small {
    width: 125px;
    opacity: 0.85;
  }
`;

export const ODSButton = styled(Button)`
  justify-self: center;
  width: 300px;
  margin-top: 2em;
  grid-area: button;
`;
