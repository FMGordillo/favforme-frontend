import "styled-components";

/// <reference types="next" />
/// <reference types="next/types/global" />

interface IPalette {
  main?: string;
  light?: string;
  dark?: string;
}

type BreakpointFn = (key: Breakpoint) => string;

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      gray: IPalette;
      black: IPalette;
      white: IPalette;
      primary: IPalette;
      secondary: IPalette;
    };
    spacing: (digit: Spacing) => string;
    breakpoints: {
      down: BreakpointFn;
      up: BreakpointFn;
    };
  }
}
