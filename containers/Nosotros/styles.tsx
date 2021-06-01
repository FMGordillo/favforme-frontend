import { Title } from "@/components";
import styled from "styled-components";

export const Section = styled.section<{ mainScreen?: boolean }>`
  text-align: center;

  ${({ mainScreen }) =>
    mainScreen &&
    `
    p {
      padding: 0 4em;
      line-height: 2em;
      font-size: 1.5em;
    }
  `}
`;

export const HighlightSection = styled(Section)`
  background-color: #f2f2f2;
  padding: 0.5em ${({ theme }) => theme.spacing(2)}em 1em;
  margin: 0 -${({ theme }) => theme.spacing(2)}em !important;
  h1 {
    font-weight: 600;
  }
  p {
    font-size: 1.15em;
    line-height: 1.5em;
  }
  b {
    font-weight: 800;
  }
`;

export const ThreeColumns = styled.div`
  display: grid;
  padding: 0 4em;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Subtitle = styled(Title)`
  weight: 500;
  font-size: 1.5em;
`;

export const TwoColumnSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;

  .content {
    text-align: right;
  }

  h1 {
    margin: 0;
  }
  p {
    line-height: 1.5em;
    font-size: 1.25em;
    margin: 1em 0 0 0;
  }

  b {
    font-weight: 800;
  }

  .img {
    flex: 1;
  }
`;

export const Team = styled.div`
  display: flex;
`;

export const Member = styled.div``;
