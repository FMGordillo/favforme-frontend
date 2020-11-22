import styled from "styled-components";

/**
 * h1
 */
export const Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`;

/**
 * p
 */
export const Text = styled.p`
  line-height: 1.75em;
`;

/**
 * button
 */
export const Button = styled.button`
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25em;
  padding: 1em 1.25em;
  border-radius: 3em;
  font-family: abel, sans-serif;
  background-color: ${({ theme }) => theme.colors.primary};
`;
