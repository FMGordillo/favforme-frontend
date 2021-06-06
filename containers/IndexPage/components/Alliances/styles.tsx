import styled from "styled-components";
import { Container as BaseContainer, Title } from "@/components";

export const Container = styled.section`
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

export const ImagesContainer = styled(BaseContainer)`
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 0 auto;

  & > a {
    display: block;
    margin: ${({ theme }) => theme.spacing(0.1)}em !important;
    max-width: 100%;
    align-self: center;
    text-align: center;
  }

  /* First row */
  & > a:nth-child(-n + 4) {
    grid-column: span 3;
  }

  /* Second row */
  & > a:nth-child(n + 5) {
    grid-column: span 4;
  }

  /* Align 2nd row left and right correctly */
  & > a:nth-child(5) {
    justify-self: right;
  }
  & > a:nth-child(7) {
    justify-self: left;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr;
    & > a:nth-child(-n + 4) {
      grid-column: inherit;
    }
    & > a:nth-child(n + 5) {
      grid-column: inherit;
    }
    & > a:nth-child(5) {
      justify-self: inherit;
    }
    & > a:nth-child(7) {
      justify-self: inherit;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
`;
