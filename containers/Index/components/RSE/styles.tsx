import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-gap: 4em;
  grid-template-columns: 1fr 1fr;
  margin: 0 ${({ theme }) => theme.spacing(2)}em;

  p {
    line-height: 1.75em;
  }
`;

export const ImageContainer = styled.div`
  align-self: center;
  justify-self: right;
`;
