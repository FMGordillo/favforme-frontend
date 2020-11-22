import Head from "next/head";
import { FunctionComponent } from "react";

export interface HeadProps {
  title?: string;
}

const HeadComponent: FunctionComponent<HeadProps> = ({ title }) => (
  <>
    <Head>
      <title>{title && `${title} -`} Fundación FavForMe</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="/static/assets/styles/fonts.css" rel="stylesheet" />
    </Head>
  </>
);

export { HeadComponent };
