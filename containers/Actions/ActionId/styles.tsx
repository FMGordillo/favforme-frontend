import { Container } from "@/components";
import styled from "styled-components";

export const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ActionContent = styled(Container)`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 3fr 1fr;
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;
export const JoinUsContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
export const Summary = styled.div`
  display: grid;
  grid-gap: 1em;
`;
export const LeftColumn = styled.div`
  div:first-child {
    text-align: center;
  }
`;
export const RightColumn = styled.div``;
