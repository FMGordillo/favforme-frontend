import styled from "styled-components";
import { Container } from "../../styles";

export const Main = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    "left-image text right-image"
    "ods ods ods"
    "ods-container ods-container ods-container";
    
    /* TODO: Queda asi porque se ve horrible en un tamaño intermedio. La contra del static */
    @media(max-width: 1070px) {
    grid-template-areas:
      "text text text"
      "ods ods ods"
      "ods-container ods-container ods-container";
    & > :first-child {
      display: none !important;
    }
    & > :nth-child(3) {
      display: none !important;
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
  margin: 0 ${({ theme }) => theme.spacing(1)}em;
  & > p {
    text-align: justify;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    margin: 0 ${({ theme }) => theme.spacing(2)}em;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(1)}em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

export const ODSLogo = styled.div`
  grid-area: ods;
  justify-self: center;
  margin: 0 ${({ theme }) => theme.spacing(0.25)}em;
  margin-bottom: 1.25em;
`;

export const ODSContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ods-container;
  transition: width 500ms ease-in;

  & > * {
    margin: 0 0.5em;
  }

  .img.smallest {
    width: 75px;
  }

  .img.smaller {
    width: 100px;
  }

  .img.small {
    width: 125px;
  }
`;
