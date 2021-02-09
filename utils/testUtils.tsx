import { render } from "@testing-library/react";
import { ReactChild } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/queries";
import { theme } from "./styled";

const Providers = ({ children }: { children: ReactChild }) => {
  // FIXME: Testing next-firebase-auth fail!
  // initAuth();
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SWRConfig>
  );
};

const customRender = (ui: JSX.Element, options = {}) =>
  // @ts-ignore
  render(ui, { wrapper: Providers, ...options });

import "@testing-library/jest-dom";
export * from "@testing-library/react";
export { customRender as render };
