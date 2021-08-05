import { ButtonLink, Container } from "@/components";
import styled from "styled-components";

export const HighlightText = styled.p`
  color: #027aa8;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center !important;
  padding: 0 32px;
  max-width: 1024px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 32px 0 0;
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
    margin: 64px 32px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 32px 8px;
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

export const ODSButton = styled(ButtonLink)`
  justify-self: center;
  width: 300px;
  margin-top: 32px;
  grid-area: button;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
`;
