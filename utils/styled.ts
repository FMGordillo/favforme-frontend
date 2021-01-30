import { DefaultTheme } from "styled-components";

export type Direction = "left" | "center" | "right";
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

export const theme: DefaultTheme = {
  palette: {
    primary: { main: "#5573f5", light: "#9BAAF6", dark: "#27358d" },
    secondary: {
      light: "#FFBCC4",
      main: "#f38d9f",
      dark: "#a21d44",
    },
    common: {
      gray: { light: "#f6f6f6", main: "#B2B2B2", dark: "#9b9b9b" },
    },
  },
  spacing: (digit: Spacing): string => `${digit * 4}`,
  breakpoints: {
    down: (key: Breakpoint): string =>
      `@media (max-width: ${calculateBreakpoint(key)})`,
    // @deprecated
    up: (key: Breakpoint): string =>
      `@media (min-width: ${calculateBreakpoint(key)})`,
  },
};
