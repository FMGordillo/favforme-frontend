import styled from "styled-components";
import { Title } from "@/components/styles";

export const Container = styled.section`
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & > * {
    margin: ${({ theme }) => theme.spacing(0.1)}em !important;
    max-width: 100%;
    align-self: center;
    text-align: center;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
`;
