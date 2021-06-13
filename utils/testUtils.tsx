import { render } from "@testing-library/react";
import { ReactChild } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/queries";
import { lightTheme } from "./styled";

const Providers = ({ children }: { children: ReactChild }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher,
      }}
    >
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </SWRConfig>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: JSX.Element, options = {}) =>
  // @ts-ignore
  render(ui, { wrapper: Providers, ...options });

import "@testing-library/jest-dom";
export * from "@testing-library/react";
export { customRender as render };
