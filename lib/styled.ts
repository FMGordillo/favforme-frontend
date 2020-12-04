import baseStyled, { ThemedStyledInterface } from "styled-components";

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export const calculateBreakpoint = (key: Breakpoint): string => {
  switch (key) {
    case "xs":
      return "0px";
    case "sm":
      return "600px";
    case "md":
      return "960px";
    case "lg":
      return "1280px";
    case "xl":
      return "1920px";
  }
};

export const theme = {
  color: {
    primary: {
      main: "#5573f5",
      dark: "#1b233c",
    },
    secondary: {
      main: "#f38d9f",
      dark: "#a21d44",
    },
    gray: "#B2B2B2",
  },
  spacing: (digit: Spacing): string => `${digit * 4}`,
  breakpoints: {
    // "Mobile first"
    down: (key: Breakpoint): string =>
      `@media (max-width: ${calculateBreakpoint(key)})`,
    // Not being used rn
    up: (key: Breakpoint): string =>
      `@media (min-width: ${calculateBreakpoint(key)})`,
  },
};

export type Theme = typeof theme;
export default baseStyled as ThemedStyledInterface<Theme>;
