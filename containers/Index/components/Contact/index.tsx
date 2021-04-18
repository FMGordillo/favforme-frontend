import { Container } from "@/components";
import Image from "next/image";
import { FunctionComponent } from "react";
import { HighlightedText, Main, Text, Title } from "./styles";

const ContactSection: FunctionComponent = () => (
  <Container>
    <Main>
      <div className="first-element">
        <Image src="/images/contact.svg" width={500} height={400} />
      </div>
      <div className="second-element">
        <Title>Estamos con vos</Title>
        <Text>
          Contamos con un equipo amigable para acompañarte en el proceso y
          atender cualquier inquietud que tengas acerca de nuestro desarrollo,
          contactanos.
        </Text>
        <HighlightedText>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="mailto:hello@favforme.com"
          >
            hello@favforme.com
          </a>
          <br />
          <a href="tel:+541145678901" rel="noreferrer noopener" target="_blank">
            +54 11 4567 8901
          </a>
        </HighlightedText>
      </div>
    </Main>
  </Container>
);

export { ContactSection };
