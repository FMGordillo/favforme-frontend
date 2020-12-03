import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";

const FooterContainer = styled.section`
  background-color: #27358c;
`;

const SocialNetworks = styled.div`
  display: grid;
  max-width: 400px;
  padding: 1em;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & > * {
    max-width: 2em;
    color: white;
    :hover {
      cursor: pointer;
    }
    :nth-child(1) {
      :hover {
        color: #0a66c2;
      }
    }
    :nth-child(2) {
      :hover {
        color: #d92d83;
      }
    }
    :nth-child(3) {
      :hover {
        color: #1877f2;
      }
    }
    :nth-child(4) {
      :hover {
        color: #1da1f2;
      }
    }
  }
`;

const MapSection = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing(1)}em
    ${({ theme }) => theme.spacing(2)}em;
  justify-content: space-around;
  align-items: center;
  & > * {
    flex: 1;
  }
  & > :first-child {
    flex: 2;
    text-align: center;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(1)}em;
  }
`;
const MapUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-flow: colum wrap;
  overflow: hidden;
  list-style: none;
`;
const MapLi = styled.li`
  line-height: 2.5;
`;
const Link = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: all ease-in-out 300ms;
  &:hover {
    border-color: white;
  }
`;

const MapItem: FunctionComponent<{ href?: string; onClick?: () => void }> = ({
  children,
  onClick,
  href,
}) => {
  const props = Object.assign({}, href && { href }, onClick && { onClick });
  return (
    <MapLi {...props.onClick}>
      <Link {...props}>{children}</Link>
    </MapLi>
  );
};

const Copyright = styled.section`
  background-color: #1b233c;
  p {
    padding: 2em;
    margin: 0;
    text-align: center;
    color: #707070;
  }
`;

interface FooterProps {
  toggleModal: () => void;
}

const Footer: FunctionComponent<FooterProps> = ({ toggleModal }) => (
  <FooterContainer>
    <MapSection>
      <div>
        <Image src="/images/favforme_logo_white.png" width={245} height={192} />
      </div>
      <MapUl>
        <MapItem href="#">Home</MapItem>
        <MapItem href="#partners">Partners</MapItem>
        <MapItem onClick={toggleModal}>Contacto</MapItem>
        <MapItem href="/privacy">Política de Privacidad</MapItem>
        <MapItem href="/terms_and_conditions">Términos y Condiciones</MapItem>
      </MapUl>
    </MapSection>
    <SocialNetworks>
      <a
        target="_blank"
        href="https://www.linkedin.com/company/64580065"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/favforme"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/FavForMe/"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/FavForMe1"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </SocialNetworks>
    <Copyright>
      <p>FavForMe 2020 - All rights reserved</p>
    </Copyright>
  </FooterContainer>
);

export { Footer };
