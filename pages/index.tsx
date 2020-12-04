import { LayoutComponent as Layout, Modal } from "components";
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { Header } from "../components";
import {
  Actions,
  Brands,
  CallActions,
  Footer,
  IntroOne,
  IntroTwo,
} from "../components/Landing";

const Divider = styled.div`
  margin-bottom: 6em;
`;

const IndexPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      {/* TODO: No la pense bien, y no deberia poner props aca */}
      <Modal title="Contacto" onClose={() => setOpen(false)} open={open}>
        <p>
          WhatsApp:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/5491123993440?text=${encodeURIComponent(
              "Vengo del Landing!"
            )}`}
          >
            +5491123993440
          </a>
        </p>
        <p>
          Llamar:{" "}
          <a rel="noreferrer" target="_blank" href="tel:+5491123993440">
            +5491123993440
          </a>
        </p>
        <p>
          Correo:{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`mailto:hello@favforme.com?subject=${encodeURIComponent(
              "Contacto"
            )}`}
          >
            hello@favforme.com
          </a>
        </p>
      </Modal>
      <Header
        isIndex
        toggleModal={() => setOpen(!open)}
        subtitle="No dejamos a nadie atrás"
      />
      <Divider />
      <IntroOne />
      <Divider />
      <IntroTwo />
      <Divider />
      <Actions />
      <Divider />
      <CallActions toggleModal={() => setOpen(!open)} />
      <Divider />
      {/* <Business />
      <Divider /> */}
      <Brands />
      <Divider />
      <Footer toggleModal={() => setOpen(!open)} />
    </Layout>
  );
};

export default IndexPage;
