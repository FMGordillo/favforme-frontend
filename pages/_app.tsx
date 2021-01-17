import request from "graphql-request";
import * as gtag from "lib/gtag";
import seoConfig from "lib/seo.config";
import { theme } from "lib/styled";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Router from "next/router";
import NextNprogress from "nextjs-progressbar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { Auth0Provider } from "use-auth0-hooks";

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

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 10000,
          fetcher: (query, params) =>
            request(process.env.NEXT_PUBLIC_BACKEND_URL || "", query, params),
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
          <Auth0Provider
            domain="favforme-next.us.auth0.com"
            redirectUri="http://localhost:3000/"
            clientId="uEoLmRbNK4kNU3FJim7V0QWuAqqiZxnl"
          >
            <Component {...pageProps} />
          </Auth0Provider>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
