import styled from "styled-components";
/**
 * h1
 */
export const Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary};
`;

/**
 * p
 */
export const Text = styled.p`
  line-height: 1.75em;
`;

type Color = "primary" | "secondary";
interface ButtonI {
  color?: Color;
}

/**
 * button
 */
export const Button = styled.button<ButtonI>`
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25em;
  padding: 1em 1.25em;
  border-radius: 3em;
  font-family: abel, sans-serif;
  background-color: ${({ theme, color }) => theme.color[color || "primary"]};
`;
