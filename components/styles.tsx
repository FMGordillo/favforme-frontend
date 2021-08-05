import { Color, Variant } from "@/utils/styled";
import styled from "styled-components";

/**
 * h1
 */
export const Title = styled.h1<{
  color?: Color | string;
  weight?: string;
  variant?: Variant;
  fontSize?: string;
}>`
  font-size: ${({ fontSize }) => fontSize || "2em"};
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ theme, color, variant }) =>
    typeof color !== "string"
      ? theme.palette[color || "primary"][variant || "main"]
      : color};
`;

/**
 * p
 */
export const Text = styled.p`
  line-height: 1.75em;
  text-align: center;
`;

/**
 * section
 * @param {number} spacing The lateral space
 */
export const Container = styled.section<{ center?: boolean; spacing?: number }>`
  ${({ center }) => (center ? "text-align: center;" : "")}
  margin: ${({ theme }) => theme.spacing(1)}em 0;
  ${({ theme, spacing }) => `
    margin: 0 ${theme.spacing(spacing || 1)}em;
    ${theme.breakpoints.down("sm")} {
      margin: 0 ${theme.spacing(0.5)}em;
    }
  `}
`;

/**
 * hr
 */
export const Divider = styled.hr`
  border: none;
  padding-top: 32px;
  padding-bottom: 32px;
`;
