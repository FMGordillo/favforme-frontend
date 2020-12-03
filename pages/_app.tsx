import { ApolloProvider } from "@apollo/client";
import * as gtag from "lib/gtag";
import { theme } from "lib/styled";
import Router from "next/router";
import NextNprogress from "nextjs-progressbar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useApollo } from "../lib/apolloClient";

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

export default function App({ Component, pageProps }): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <NextNprogress
            color={theme.color.secondary.main}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
