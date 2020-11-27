import { LayoutComponent as Container, Modal } from "components";
import {
  Brands,
  Business,
  CallActions,
  Footer,
  Header,
  IntroOne,
  IntroTwo,
  NavBar,
} from "components/Landing";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const Divider = styled.div`
  margin-bottom: 6em;
`;

const IndexPage: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {/* TODO: No la pense bien, y no deberia poner props aca */}
      <Modal
        title="Contacto"
        onClose={() => {
          console.log("To be implemented");
          setOpen(false);
        }}
        open={open}
      >
        <p>
          WhatsApp:{" "}
          <a
            target="_blank"
            href={`https://wa.me/5491123993440?text=${encodeURIComponent(
              "Vengo del Landing!"
            )}`}
          >
            +5491123993440
          </a>
        </p>
        <p>
          Llamar:{" "}
          <a target="_blank" href="tel:+5491123993440">
            +5491123993440
          </a>
        </p>
        <p>
          Correo:{" "}
          <a
            target="_blank"
            href={`mailto:hello@favforme.com?subject=${encodeURIComponent(
              "Contacto"
            )}`}
          >
            hello@favforme.com
          </a>
        </p>
      </Modal>
      <NavBar toggleModal={() => setOpen(!open)} />
      <Header />
      <Divider />
      <IntroOne />
      <Divider />
      <IntroTwo />
      <Divider />
      <CallActions />
      <Divider />
      <Business />
      <Divider />
      <Brands />
      <Divider />
      <Footer toggleModal={() => setOpen(!open)} />
    </Container>
  );
};

export default IndexPage;
