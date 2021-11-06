import { MockedProvider } from "@apollo/client/testing";
import { ReactChild } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styled";
import { render } from "@testing-library/react";

const Providers = ({ children }: { children: ReactChild }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <SessionProvider session={null}>
        <MockedProvider>{children}</MockedProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: JSX.Element, options = {}) =>
  // @ts-ignore
  render(ui, { wrapper: Providers, ...options });

import "@testing-library/jest-dom";
export * from "@testing-library/react";
export { customRender as render };
