import styled from "styled-components";

/**
 * h1
 */
export const Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary.main};
`;

/**
 * p
 */
export const Text = styled.p`
  line-height: 1.75em;
`;

// TODO: Use this from styled.ts
type Color = "primary" | "secondary";
type Variant = "light" | "main" | "dark";
interface ButtonI {
  color?: Color;
  variant?: Variant;
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
  background-color: ${({ theme, color, variant }) =>
    theme.color[color || "primary"][variant || "main"]};

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

/**
 * section
 */
export const Container = styled.section`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em !important;
  }
`;
