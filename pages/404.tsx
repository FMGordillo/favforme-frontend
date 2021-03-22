import { Container, Layout, Title } from "@/components";
import { NextPage } from "next";

const Custom404Page: NextPage = () => {
  return (
    <Layout header footer title="No se encuentra">
      <Container center>
        <Title>404 - No lo encontramos</Title>
        <p>
          Si crees que fue un error, por favor escribinos las últimas acciones
          que realizaste a{" "}
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
