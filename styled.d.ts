import "styled-components";

interface IPalette {
  main?: string;
  light?: string;
  dark?: string;
}

type BreakpointFn = (key: Breakpoint) => string;

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common?: {
        gray?: IPalette;
        black?: string;
        white?: string;
      };
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