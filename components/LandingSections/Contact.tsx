import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Container, Title } from "../styles";

const StyledTitle = styled(Title)`
  text-align: left;

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
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

const Text = styled.p`
  line-height: 1.75em;
`;

const HighlightedText = styled.p`
  margin-top: 0;
  font-family: dosis;
  font-size: 2em;
  font-weight: 400;
  line-height: 1.5em;
  color: ${({ theme }) => theme.palette.primary.main};
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

const ContactSection: FunctionComponent = () => (
  <Container>
    <Main>
      <div className="first-element">
        <Image src="/images/contact.svg" width={500} height={400} />
      </div>
      <div className="second-element">
        <StyledTitle>Estamos con vos</StyledTitle>
        <Text>
          Contamos con un equipo amigable para acompañarte en el proceso y
          atender cualquier inquietud que tengas acerca de nuestro desarrollo,
          contactanos.
        </Text>
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
