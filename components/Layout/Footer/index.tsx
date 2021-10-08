import {
  Copyright,
  FooterContainer,
  Link,
  MapLi,
  MapSection,
  MapUl,
  SocialNetworks,
} from "./styles";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import Image from "next/image";
import NextLink from "next/link";

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
        <NextLink href="/">
          <a href="#" aria-label="Volver al inicio">
            {/* <Logo /> */}
            <Image
              src="/images/favforme-logo-wide-white.webp"
              alt="Logo FavForMe"
              width={300}
              height={55}
            />
          </a>
        </NextLink>
      </div>
      <MapUl>
        <MapItem href="/acciones">Acciones</MapItem>
        <MapItem href="/nosotros">FavForMe</MapItem>
        <MapItem href="/#brands">Empresas</MapItem>
        <MapItem onClick={() => console.log("PENDING")}>Contacto</MapItem>
        <MapItem href="/terms_and_conditions">Términos de uso</MapItem>
      </MapUl>
    </MapSection>
    <SocialNetworks>
      <a
        aria-label="LinkedIn"
        target="_blank"
        href="https://www.linkedin.com/company/64580065"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        aria-label="Instagram"
        target="_blank"
        href="https://www.instagram.com/favforme"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        aria-label="Facebook"
        target="_blank"
        href="https://www.facebook.com/FavForMe/"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        aria-label="Twitter"
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
