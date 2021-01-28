import { Layout, Modal } from "components";
import { GET_ACTIONS } from "lib/queries";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { Divider } from "../components";
import {
  ActionsComponent,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
  IntroTwo,
} from "../components/LandingSections";

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

const IndexPage: NextPage = () => {
  const { data } = useSWR(GET_ACTIONS);
  const [open, setOpen] = useState(false);

  return (
    <Layout
      header
      headerProps={{
        isIndex: true,
        toggleModal: () => setOpen(!open),
        subtitle: "No dejemos a nadie atrás",
      }}
    >
      {/* TODO: No la pense bien, y no deberia poner props aca */}
      <Modal title="Contacto" onClose={() => setOpen(false)} open={open}>
        <ModalContent>
          <div>
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
          </div>
          <div>
            <Image
              src="/images/contact.svg"
              layout="intrinsic"
              width={500}
              height={400}
            />
          </div>
        </ModalContent>
      </Modal>
      <Divider />
      <IntroOne />
      <ActionsComponent actions={data?.actions} />
      <Divider />
      <CallToActionSection toggleModal={() => setOpen(!open)} />
      <Divider />
      <AlliancesSection />
      <Divider />
      <ContactSection />
      <Divider />
    </Layout>
  );
};

export default IndexPage;
