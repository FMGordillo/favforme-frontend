import { LogoJsonLd, NextSeo } from "next-seo";
import { FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export interface HeadProps {
  title: string;
}

const HeadComponent: FunctionComponent<HeadProps> = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          url: `https://favforme.com${router?.asPath}`,
        }}
      />
      <LogoJsonLd
        url="https://favforme.com"
        logo="https://favforme.com/images/favforme_logo.webp"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/fonts.css" rel="stylesheet" />
      </Head>
    </>
  );
};

export { HeadComponent };
