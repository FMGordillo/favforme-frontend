import * as gtag from "../lib/gtag";
import { ModalProvider, NotificationProvider } from "../lib/context";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NextNprogress from "nextjs-progressbar";
import { SWRConfig } from "swr";
import axios from "axios";
import { fetcher } from "../lib/queries";
import { lightTheme } from "../utils/styled";
import seoConfig from "../lib/seo.config";
import { useEffect } from "react";
import { useRouter } from "next/router";

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

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  // TODO: Primero definir los colores, luego la metodología, y recién ahí habilitamos esto
  // const darkMode = useDarkMode();
  // const theme = darkMode.value ? darkTheme : lightTheme;
  const theme = lightTheme;

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
          <NotificationProvider>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </NotificationProvider>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
