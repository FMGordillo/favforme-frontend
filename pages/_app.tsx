import Router from "next/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as gtag from "../lib/gtag";

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

const theme = {
  colors: {
    primary: "#5573f5",
    secondary: "#f38d9f",
  },
};

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
