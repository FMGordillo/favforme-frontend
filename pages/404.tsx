import { Container, Layout, Title } from "@/components";
import { NextPage } from "next";
import Image from "next/image";

const Custom404Page: NextPage = () => {
  return (
    <Layout header footer title="No se encuentra">
      <Container center>
        <Title>404 - No lo encontramos</Title>
        <Image src="/images/404.svg" width="500" height="500" />
        <p>
          Si crees que fue un error por favor,
          <br /> comentanos las últimas acciones que realizaste a{" "}
          <a
            href="mailto:desarrollo@favforme.com"
            target="_blank"
            rel="noreferrer"
          >
            desarrollo@favforme.com
          </a>
        </p>
      </Container>
    </Layout>
  );
};

export default Custom404Page;
