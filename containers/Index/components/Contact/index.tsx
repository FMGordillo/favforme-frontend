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
            href="mailto:hello@favforme.com"
          >
            hello@favforme.com
          </a>
          <br />
          <a href="tel:+541150592054" rel="noreferrer noopener" target="_blank">
            +54 11 5059 2054
          </a>
        </HighlightedText>
      </div>
    </Main>
  </Container>
);

export { ContactSection };
