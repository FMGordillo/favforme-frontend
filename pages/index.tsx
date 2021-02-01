import { Button, Layout } from "components";
import { ModalContext } from "lib/context";
import { useActions } from "lib/hooks";
import { NextPage } from "next";
import { useContext } from "react";
import styled from "styled-components";
import { Divider } from "../components";
import {
  ActionsComponent,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
} from "../components/LandingSections";
import Image from "next/image";

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

const IndexPage: NextPage = () => {
  const modalData = useContext(ModalContext);
  const { data } = useActions();

  return (
    <Layout
      header
      headerProps={{
        isIndex: true,
        title: "Estás en FavForMe",
        toggleModal: () => modalData.handleModal(<p>HABER</p>),
        subtitle: "No dejemos a nadie atrás",
      }}
    >
      {/* <Modal title="Contacto" onClose={() => setOpen(false)} open={open}>
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
      </Modal> */}

      <Divider />
      <Button
        onClick={() => {
          modalData.handleModal(
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
          );
        }}
      >
        Toggle
      </Button>
      <IntroOne />
      <ActionsComponent actions={data?.actions} />
      <Divider />
      <CallToActionSection
        toggleModal={() => modalData.handleModal(<p>TEST</p>)}
      />
      <Divider />
      <AlliancesSection />
      <Divider />
      <ContactSection />
      <Divider />
    </Layout>
  );
};

export default IndexPage;
