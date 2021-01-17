import Image from "next/image";
import React, { cloneElement, FunctionComponent, useState } from "react";
import { Item, Link, MobileNavigator, Nav, Ul } from "./styles";

interface NavItemProps {
  href?: string;
  image?: boolean;
  onClick?: () => void;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  children,
  onClick,
  href,
}) => {
  const props = Object.assign(
    {},
    href ? { href } : {},
    onClick ? { onClick } : {}
  );
  return (
    <Item image>{cloneElement(<Link />, { onClick, ...props, children })}</Item>
  );
};

interface NavBarProps {
  isScrolled?: boolean;
  toggleModal?: () => void;
}

const NavBar: FunctionComponent<NavBarProps> = ({ toggleModal }) => {
  const [open, setOpen] = useState(false);

  const handleMobileOpen = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <MobileNavigator open={open}>
        <Image
          onClick={handleMobileOpen}
          layout="fixed"
          width={60}
          height={60}
          src="/images/hamburger.png"
        />
      </MobileNavigator>
      <Ul open={open}>
        <NavItem href="#actions">Acciones</NavItem>
        <NavItem href="#call_to_actions">Features</NavItem>
        <NavItem image href="/">
          <Image
            src="/images/favforme_logo_white.png"
            width={245}
            height={192}
          />
        </NavItem>
        <NavItem href="#brands">Alianzas</NavItem>
        <NavItem onClick={toggleModal}>Contacto</NavItem>
      </Ul>
    </Nav>
  );
};

export { NavBar };
