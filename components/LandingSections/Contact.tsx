import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Container, Title } from "../styles";

const StyledTitle = styled(Title)`
  text-align: center;
`;

const Main = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  max-width: 960px;
  align-items: center;
  & .first-element {
    text-align: right;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    .first-element {
      text-align: center;
    }
  }
`;

const HighlightedText = styled.p`
  margin-top: 0;
  font-family: dosis;
  font-size: 2em;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary.main};
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactSection: FunctionComponent = () => (
  <Container>
    <StyledTitle>Contacto</StyledTitle>
    <Main>
      <div className="first-element">
        <Image src="/images/contact.png" width={400} height={300} />
      </div>
      <div className="second-element">
        <p>
          Contamos con un equipo amigable para acompañarte en el proceso y
          atender cualquier inquietud que tengas acerca de nuestro desarrollo,
          contactanos.
        </p>
        <HighlightedText>
          <a target="_blank" rel="noreferrer" href="mailto:hello@favforme.com">
            hello@favforme.com
          </a>
          <br />
          <a href="tel:+541145678901" rel="noreferrer" target="_blank">
            +54 11 4567 8901
          </a>
        </HighlightedText>
      </div>
    </Main>
  </Container>
);

export { ContactSection };
