import { HighlightedText, Main, Text, Title } from "./styles";
import { Container } from "@/components";
import { FunctionComponent } from "react";
import Image from "next/image";

const ContactSection: FunctionComponent = () => (
  <Container>
    <Main>
      <div className="first-element">
        <Image
          alt="Personas en contacto"
          src="/images/contact.svg"
          width={500}
          height={400}
        />
      </div>
      <div className="second-element">
        <Title>Apoyá esta gran iniciativa</Title>
        <Text>
          Si formás parte de una ONG o una empresa, sumate a esta plataforma;
          contactate directamente para recibir con más detalle todo lo que podés
          hacer junto a FavForMe.
        </Text>
        <HighlightedText>
          <a
            target="_blank"
            rel="noreferrer noopener"
            aria-label="hello@favforme.com"
            href="mailto:hello@favforme.com"
          >
            hello@favforme.com
          </a>
          <br />
          <a
            href="tel:+541150592054"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="+541150592054"
          >
            +54 11 5059 2054
          </a>
        </HighlightedText>
      </div>
    </Main>
  </Container>
);

export { ContactSection };
