import { Title as BaseTitle } from "@/components";
import styled from "styled-components";

export const Title = styled(BaseTitle)`
  text-align: left;

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

export const Main = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  max-width: 960px;
  align-items: center;
  & .first-element {
    text-align: right;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    .first-element {
      text-align: center;
    }
  }
`;

export const Text = styled.p`
  line-height: 1.75em;
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

export const HighlightedText = styled.p`
  margin-top: 0;
  font-family: dosis;
  font-size: 2em;
  font-weight: 400;
  line-height: 1.5em;
  color: ${({ theme }) => theme.palette.primary.main};
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;
