import Head from "next/head";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

export interface HeadProps {
  title?: string;
}

const HeadComponent: FunctionComponent<HeadProps> = ({ title }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title && `${title} - `}Fundación FavForMe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={title && `${title} - ` + "Fundacion FavForMe"}
        />
        <meta
          name="og:description"
          content="Fundación FavForMe es una ONG que contacta gente que le gusta ayudar con ONGs y empresas con RSE"
        />
        <meta
          property="og:url"
          content={`https://favforme.com${router.asPath}`}
        />
        <meta property="og:image" content="/images/plato_de_comida.png" />
        <meta name="twitter:site" content="@favforme1" />
        <link href="/static/assets/styles/fonts.css" rel="stylesheet" />
      </Head>
    </>
  );
};

export { HeadComponent };
