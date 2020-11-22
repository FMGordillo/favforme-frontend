import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  line-height: 1.75em;
`;
