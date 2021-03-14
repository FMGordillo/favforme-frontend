import { Color, Variant } from "@/utils/styled";
import styled from "styled-components";

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
    theme.palette[color || "primary"][variant || "main"]};
`;

/**
 * p
 */
export const Text = styled.p`
  line-height: 1.75em;
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
