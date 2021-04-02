import Image from "next/image";
import { DialogContainer, DialogTitle } from "../styles";
import { FunctionComponent } from "react";
import styled from "styled-components";

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

export const ContactModal: FunctionComponent = () => {
  return (
    <DialogContainer>
      <DialogTitle>Contacto</DialogTitle>
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
    </DialogContainer>
  );
};
