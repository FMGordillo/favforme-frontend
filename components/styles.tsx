import styled from "styled-components";

// TODO: Use this from styled.ts
type Color = "primary" | "secondary";
type Variant = "light" | "main" | "dark";

/**
 * h1
 */
export const Title = styled.h1<{
  color?: Color;
  variant?: Variant;
  weight?: string;
}>`
  font-size: 2em;
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ theme, color, variant }) =>
    theme.color[color || "primary"][variant || "main"]};
`;

/**
 * p
 */
export const Text = styled.p`
  line-height: 1.75em;
`;

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
  padding: 0.5em 1.25em;
  border-radius: 3em;
  font-family: abel, sans-serif;
  transition: background-color 300ms ease-out;
  background-color: ${({ theme, color, variant }) =>
    theme.color[color || "primary"][variant || "main"]};

  & > a {
    color: inherit;
    text-decoration: none;
  }

  :hover {
    background-color: ${({ theme, color }) =>
      theme.color[color || "primary"]["light"]};
  }
`;

/**
 * section
 */
export const Container = styled.section`
  ${({ theme }) => `
  margin: ${theme.spacing(1)}em;
  ${theme.breakpoints.down("sm")} {
    margin: 0 ${theme.spacing(0.5)}em !important;
  }
`}
`;

/**
 * hr
 */
export const Divider = styled.hr`
  border: none;
  padding-top: 4em;
  padding-bottom: 2em;
`;
