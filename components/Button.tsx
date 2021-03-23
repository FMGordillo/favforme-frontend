import { Color, Variant } from "@/utils/styled";
import styled from "styled-components";

interface ButtonI {
  color?: Color;
  hoverColor?: Color;
  variant?: Variant;
  hoverVariant?: Variant;
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
    theme.palette[color || "primary"][variant || "main"]};
  & > a {
    color: inherit;
    text-decoration: none;
  }

  :hover {
    background-color: ${({ theme, color, hoverColor, hoverVariant }) =>
      theme.palette[hoverColor || color || "primary"][hoverVariant || "light"]};
  }

  :disabled {
    background-color: ${({ theme, color, hoverColor, hoverVariant }) =>
      theme.palette[hoverColor || color || "primary"][hoverVariant || "light"]};
  }
`;
