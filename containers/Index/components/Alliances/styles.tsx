import styled from "styled-components";
import { Container as BaseContainer, Title } from "@/components";

export const Container = styled.section`
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

export const ImagesContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  & > * {
    margin: ${({ theme }) => theme.spacing(0.1)}em !important;
    max-width: 100%;
    align-self: center;
    text-align: center;
  }

  /* All the left column */
  a:nth-child(1) {
    justify-self: right;
  }
  a:nth-child(4) {
    justify-self: right;
  }

  /* All the right column */
  a:nth-child(3) {
    justify-self: left;
  }
  a:nth-child(6) {
    justify-self: left;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
`;
