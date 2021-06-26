import { DefaultTheme } from "styled-components";

export type Direction = "left" | "center" | "right";

// TODO: Use this from styled.ts
export type Color = "primary" | "secondary" | "gray" | "white" | "black";
export type Variant = "light" | "main" | "dark";
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

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

const defaultTheme = {
  spacing: (digit: Spacing): string => `${digit * 4}`,
  breakpoints: {
    down: (key: Breakpoint): string =>
      `@media (max-width: ${calculateBreakpoint(key)})`,
    // @deprecated
    up: (key: Breakpoint): string =>
      `@media (min-width: ${calculateBreakpoint(key)})`,
  },
};

export const lightTheme: DefaultTheme = {
  mode: "light",
  palette: {
    primary: { main: "#4f6be6", light: "#9BAAF6", dark: "#27358d" },
    secondary: {
      light: "#FFBCC4",
      main: "#f38d9f",
      dark: "#a21d44",
    },
    gray: { light: "#f6f6f6", main: "#B2B2B2", dark: "#797979" },
    black: {
      light: "#000",
      main: "#000",
      dark: "#000",
    },
    white: {
      light: "#FFF",
      main: "#FFF",
      dark: "#FFF",
    },
    error: "#b50404",
  },
  ...defaultTheme,
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  palette: {
    // primary: { main: "#5573f5", light: "#9BAAF6", dark: "#27358d" },
    primary: { main: "#27358d", light: "#27358d", dark: "#27358d" },
    secondary: {
      light: "#FFBCC4",
      main: "#f38d9f",
      dark: "#a21d44",
    },
    // gray: { light: "#f6f6f6", main: "#B2B2B2", dark: "#9b9b9b" },
    gray: { light: "#9b9b9b", main: "#9b9b9b", dark: "#2f2f2f" },
    black: {
      light: "#000",
      main: "#000",
      dark: "#000",
    },
    white: {
      light: "#000",
      main: "#000",
      dark: "#000",
    },
    error: "#b50404",
  },
  ...defaultTheme,
};
