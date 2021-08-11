import { Container as BaseContainer, Layout, Title } from "@/components";
import Image from "next/image";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled(BaseContainer)`
  padding: 14px 0;
`;

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
