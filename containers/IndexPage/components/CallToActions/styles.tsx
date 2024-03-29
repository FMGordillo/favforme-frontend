import { Container, Text, Title } from "@/components/styles";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(1)}em;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: stretch;
  max-width: 1024px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    margin: 0 ${({ theme }) => theme.spacing(1)}em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

export const StyledText = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 1.5em;
`;

export const Section = styled.section`
  text-align: center;
  display: grid;
  grid-template-rows: 250px auto auto;
`;
