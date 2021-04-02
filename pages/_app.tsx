import axios from "axios";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Router from "next/router";
import NextNprogress from "nextjs-progressbar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { ModalProvider } from "../lib/context";
import * as gtag from "../lib/gtag";
import { fetcher } from "../lib/queries";
import seoConfig from "../lib/seo.config";
import initAuth from "../utils/initAuth";
import { theme } from "../utils/styled";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: barlow,sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: dosis,sans-serif;
    text-transform: uppercase;
  }
`;

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

initAuth();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <SWRConfig
        value={{
          errorRetryCount: 3,
          dedupingInterval: 15000,
          focusThrottleInterval: 15000,
          fetcher,
        }}
      >
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <NextNprogress
            color={theme.palette.secondary.main}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <DefaultSeo {...seoConfig} />
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
