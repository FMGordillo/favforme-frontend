import { Title as BaseTitle } from "@/components";
import styled from "styled-components";

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

export const Title = styled(BaseTitle)`
  mark {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
