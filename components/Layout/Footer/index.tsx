import { Logo } from "@/components";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import { FunctionComponent } from "react";
import {
  MapUl,
  MapLi,
  MapSection,
  Link,
  Copyright,
  FooterContainer,
  SocialNetworks,
} from "./styles";

interface FooterProps {
  toggleModal?: () => void;
}

const MapItem: FunctionComponent<{ href?: string; onClick?: () => void }> = ({
  children,
  onClick,
  href,
}) => {
  const props = Object.assign({}, href && { href }, onClick && { onClick });

  if (href) {
    return (
      <MapLi {...props.onClick}>
        <NextLink href={href}>
          <Link {...props}>{children}</Link>
        </NextLink>
      </MapLi>
    );
  } else {
    return (
      <MapLi {...props.onClick}>
        <Link {...props}>{children}</Link>
      </MapLi>
    );
  }
};

const Footer: FunctionComponent<FooterProps> = () => (
  <FooterContainer>
    <MapSection>
      <div>
        <Logo />
      </div>
      <MapUl>
        <MapItem href="/#actions">Acciones</MapItem>
        <MapItem href="/#call_to_actions">FavForMe</MapItem>
        <MapItem href="/#brands">Empresas</MapItem>
        <MapItem onClick={() => console.log("PENDING")}>Contacto</MapItem>
        <MapItem href="/terms_and_conditions">Términos de uso</MapItem>
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
      <p>FavForMe {new Date().getFullYear()} - All rights reserved</p>
      <p className="credits">
        Illustrations by{" "}
        <a
          href="https://storyset.com/people"
          target="_blank"
          rel="noreferrer noopener"
        >
          Freepik Storyset
        </a>
      </p>
    </Copyright>
  </FooterContainer>
);

export { Footer };
