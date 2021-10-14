import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-notion-x/src/styles.css";
import * as gtag from "../lib/gtag";
import { ModalProvider, NotificationProvider } from "../lib/context";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import NextNprogress from "nextjs-progressbar";
import Script from "next/script";
import axios from "axios";
import { config } from "@fortawesome/fontawesome-svg-core";
import { lightTheme } from "../utils/styled";
import seoConfig from "../lib/seo.config";
import { setLocale } from "yup";
import { useEffect } from "react";
import { useRouter } from "next/router";

config.autoAddCss = false;

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

setLocale({
  mixed: {
    default: "Valor inválido",
    required: () => `Este campo es requerido`,
  },
  string: {
    min: (val: { label: any; min: any }) =>
      `${val.label} debe contener al menos ${val.min} caracteres`,
    email: (val: { label: any }) => `${val.label} debe ser un email válido`,
  },
});

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
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
    </>
  );
}
