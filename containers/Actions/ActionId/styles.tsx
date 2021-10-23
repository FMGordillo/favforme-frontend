import { Container as BaseContainer, Title } from "@/components";
import styled from "styled-components";

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0;
  }
`;
export const ActionContent = styled(BaseContainer)`
  display: grid;
  grid-gap: 2em;
  grid-template-areas:
    "title title"
    "left-column right-column";
  grid-template-columns: 3fr 1fr;
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-areas:
      "title"
      "left-column"
      "right-column";
    grid-template-columns: 1fr;
  }
`;
export const ActionTitle = styled(Title)`
  grid-area: title;
  font-weight: bold;
`;

export const LeftColumn = styled.div`
  grid-area: left-column;
  div:first-child {
    text-align: center;
  }
`;
export const RightColumn = styled.div`
  grid-area: right-column;
  background: ${({ theme }) => theme.palette.primary.main}};
  padding: 12px 28px;
`;

export const Details = styled.details`
  margin-top: 14px;
`;

export const Summary = styled.summary`
  cursor: pointer;
  user-select: none;
`;
