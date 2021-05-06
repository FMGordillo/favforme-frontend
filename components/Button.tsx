import { Color, Variant } from "@/utils/styled";
import styled from "styled-components";

const isOfTypeColor = (
  keyInput?: Color | string
): keyInput is Color | undefined =>
  ["primary", "secondary", "gray", "white", "black"].includes(keyInput || "");

interface ButtonI {
  color?: Color | string;
  textColor?: Color | string;
  hoverColor?: Color | string;
  variant?: Variant;
  hoverVariant?: Variant;
}

/**
 * button
 */
export const Button = styled.button<ButtonI>`
  border: none;
  color: ${({ theme, textColor }) =>
    typeof textColor !== "string"
      ? theme.palette[textColor || "white"]["main"] ?? "#fff"
      : textColor};
  cursor: pointer;
  font-size: 1.25em;
  padding: 0.5em 1.25em;
  border-radius: 3em;
  font-family: abel, sans-serif;
  transition: background-color 300ms ease-out;
  background-color: ${({ theme, color, variant }) =>
    typeof color === "undefined" || isOfTypeColor(color)
      ? theme.palette[color || "primary"][variant || "main"]
      : color};
  & > a {
    color: inherit;
    text-decoration: none;
  }

  :hover {
    background-color: ${({ theme, color, hoverColor, hoverVariant }) =>
      typeof color === "undefined" ||
      isOfTypeColor(color) ||
      typeof hoverColor === "undefined" ||
      isOfTypeColor(hoverColor)
        ? theme.palette[
            hoverColor && isOfTypeColor(hoverColor)
              ? hoverColor
              : color && isOfTypeColor(color)
              ? color
              : "primary"
          ][hoverVariant || "light"]
        : hoverColor};
  }

  :disabled {
    background-color: ${({ theme, color, hoverColor, hoverVariant }) =>
      typeof hoverColor === "undefined" || isOfTypeColor(hoverColor)
        ? theme.palette[
            hoverColor && isOfTypeColor(hoverColor)
              ? hoverColor
              : color && isOfTypeColor(color)
              ? color
              : "primary"
          ][hoverVariant || "light"]
        : hoverColor};
  }
`;
/**
 * a
 */
export const ButtonLink = styled.a<ButtonI>`
  /* <a> things*/
  text-decoration: none;
  text-align: center;

  /* everything else */
  border: none;
  color: ${({ theme, textColor }) =>
    typeof textColor !== "string"
      ? theme.palette[textColor || "white"]["main"] ?? "#fff"
      : textColor};
  cursor: pointer;
  font-size: 1.25em;
  padding: 0.5em 1.25em;
  border-radius: 3em;
  font-family: abel, sans-serif;
  transition: background-color 300ms ease-out;
  background-color: ${({ theme, color, variant }) =>
    typeof color === "undefined" || isOfTypeColor(color)
      ? theme.palette[color || "primary"][variant || "main"]
      : color};

  :hover {
    background-color: ${({ theme, color, hoverColor, hoverVariant }) =>
      typeof color === "undefined" ||
      isOfTypeColor(color) ||
      typeof hoverColor === "undefined" ||
      isOfTypeColor(hoverColor)
        ? theme.palette[
            hoverColor && isOfTypeColor(hoverColor)
              ? hoverColor
              : color && isOfTypeColor(color)
              ? color
              : "primary"
          ][hoverVariant || "light"]
        : hoverColor};
  }

  :disabled {
    background-color: ${({ theme, color, hoverColor, hoverVariant }) =>
      typeof hoverColor === "undefined" || isOfTypeColor(hoverColor)
        ? theme.palette[
            hoverColor && isOfTypeColor(hoverColor)
              ? hoverColor
              : color && isOfTypeColor(color)
              ? color
              : "primary"
          ][hoverVariant || "light"]
        : hoverColor};
  }
`;
