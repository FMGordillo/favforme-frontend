import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const RedirectPage: NextPage = () => {
  return (
    <Layout>
      <Image width={245} height={192} src="/images/favforme_logo.png" />
      <p>Redireccionando...</p>
    </Layout>
  );
};

export default RedirectPage;
