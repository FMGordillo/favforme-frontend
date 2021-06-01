import { ContactModal } from "@/components/Modal/components";
import { ModalContext } from "@/lib/context";
import Image from "next/image";
import React, { FunctionComponent, useContext, useState } from "react";
import { Logo } from "../assets";
import { NavItem } from "./NavItem";
import { MobileNavigator, Nav, Ul } from "./styles";

interface NavBarProps {
  isScrolled?: boolean;
}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const { handleModal } = useContext(ModalContext);
  const [open, setOpen] = useState(false);

  const handleMobileOpen = () => {
    setOpen(!open);
  };

  const handleContactClick = () => {
    handleModal(ContactModal);
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
        <NavItem href="/nosotros">FavForMe</NavItem>
        <NavItem href="/acciones">Acciones</NavItem>
        <NavItem image href="/">
          <Logo />
        </NavItem>
        <NavItem href="/#brands">Empresas</NavItem>
        <NavItem onClick={handleContactClick}>Contacto</NavItem>
        {/* <NavItem isProfileButton onClick={() => router.push("/perfil")}>
          {"TODO: CHANGE ME"}
        </NavItem>
        <User onClick={() => router.push("/perfil")}>
          <Image src="/images/icon_user.svg" width={75} height={75} />
          <p>{"TODO: CHANGE ME"}</p> 
        </User>*/}
      </Ul>
    </Nav>
  );
};

export { NavBar };
