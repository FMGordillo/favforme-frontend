import { FunctionComponent, ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../utils/styled";

const AllTheProviders: FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
