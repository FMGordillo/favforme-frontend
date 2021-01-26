import styled from "styled-components";
import { Container, Text, Title } from "../../styles";

export const StyledContainer = styled(Container)`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(1)}em;
  margin: 0 ${({ theme }) => theme.spacing(2)}em;
  grid-template-columns: 1fr 1fr 1fr;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    margin: 0 ${({ theme }) => theme.spacing(2)}em;
  }
`;

export const StyledText = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: justify;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 1.5em;
`;

export const Section = styled.section`
  text-align: center;
  display: grid;
  justify-items: center;
`;
