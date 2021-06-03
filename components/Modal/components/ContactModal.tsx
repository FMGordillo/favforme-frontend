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
              rel="noreferrer noopener"
              href={`https://wa.me/541150592054?text=${encodeURIComponent(
                "Vengo del sitio web!"
              )}`}
            >
              +54 11 5059 2054
            </a>
          </p>
          <p>
            Llamar:{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="tel:+541150592054"
            >
              +54 11 5059 2054
            </a>
          </p>
          <p>
            Correo:{" "}
            <a
              rel="noreferrer noopener"
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
