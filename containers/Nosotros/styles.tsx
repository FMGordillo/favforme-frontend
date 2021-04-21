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
  padding-top: 0.5em;
  padding-bottom: 1em;
  margin: 0 -4em !important;
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
  display: flex;

  .content {
    flex: 2;
  }

  .img {
    flex: 1;
  }
`;
