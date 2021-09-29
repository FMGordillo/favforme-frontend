import { Title } from "@/components";
import styled from "styled-components";

export const Section = styled.section<{ mainScreen?: boolean }>`
  text-align: center;

  ${({ mainScreen, theme }) =>
    mainScreen &&
    `
      margin: 0 auto;
      max-width: 960px;
    p {
      line-height: 2em;
      font-size: 1.5em;
    }
    ${theme.breakpoints.down("md")} {
      p {
        padding: 0;
      }
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
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0.5em 2em 1em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0 -36px !important;
    padding: 0.5em 14px 1em;
  }
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 3em;
  grid-template-columns: 1fr 1fr 1fr;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`;

export const FourColumns = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`;

export const Subtitle = styled(Title)`
  weight: 500;
  font-size: 1.5em;
`;

export const TwoColumnSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  padding-top: 2em;
  padding-bottom: 3em;

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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1em;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin 0 -4em;
    grid-template-columns: repeat(4, 1fr);
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`;

export const Member = styled.div`
  p {
    margin-bottom: 0;
  }
`;

export const Advisor = styled.div`
  color: ${({ theme }) => theme.palette.gray.dark};
  font-size: 0.85em;
  .image {
    border-radius: 100px;
  }
`;
