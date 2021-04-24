import { Title } from "@/components";
import styled from "styled-components";

export const Section = styled.section<{ mainScreen?: boolean }>`
  text-align: center;

  ${({ mainScreen }) =>
    mainScreen &&
    `
    p {
      font-size: 1.25em;
    }
  `}
`;

export const HighlightSection = styled(Section)`
  background-color: #f2f2f2;
  padding: 0.5em ${({ theme }) => theme.spacing(2)}em 1em;
  margin: 0 -${({ theme }) => theme.spacing(2)}em !important;
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
  grid-gap: 1em;

  .content {
    text-align: right;
  }

  .img {
    flex: 1;
  }
`;
