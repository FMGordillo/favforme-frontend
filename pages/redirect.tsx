import { Logo } from "@/components";
import { NextPage } from "next";
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
      <Logo />
      <p>Redireccionando...</p>
    </Layout>
  );
};

export default RedirectPage;
