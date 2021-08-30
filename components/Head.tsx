import { FunctionComponent } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
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
        titleTemplate="%s - Fundación FavForMe"
        openGraph={{
          title: "Fundación FavForMe",
          locale: "es-ES",
          url: `https://favforme.com${router?.asPath}`,
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/fonts.css" rel="stylesheet" />
      </Head>
    </>
  );
};

export { HeadComponent };
