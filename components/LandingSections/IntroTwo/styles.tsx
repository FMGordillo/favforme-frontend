import { Container } from "../../../components";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  display: grid;
  margin: 0 ${({ theme }) => theme.spacing(2)}em;
  column-gap: 3em;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;

    & > :last-child {
      grid-row-start: 1;
      justify-self: center;
    }

    & > :first-child h1 {
      text-align: center;
    }
    & > :first-child p {
      text-align: justify;
    }
  }
`;

export const LeftSide = styled.div`
  justify-self: right;
  text-align: right;
`;

export const RightSide = styled.div`
  justify-self: center;
`;
