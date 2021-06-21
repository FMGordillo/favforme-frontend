import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 4em 0;
  padding: 0 ${({ theme }) => theme.spacing(4)}em;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0 ${({ theme }) => theme.spacing(2)}em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0 ${({ theme }) => theme.spacing(1)}em;
  }
`;

export const ButtonContainer = styled.div``;
