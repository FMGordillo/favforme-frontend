import { ContactModal } from "@/components/Modal/components";
import { useUser } from "@/hooks";
import { ModalContext } from "@/lib/context";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FunctionComponent, useContext, useState } from "react";
import { NavItem } from "./NavItem";
import { MobileNavigator, Nav, Ul, User } from "./styles";

interface NavBarProps {
  isScrolled?: boolean;
}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const router = useRouter();
  const { firebaseData } = useUser();
  console.log(firebaseData);
  const { handleModal } = useContext(ModalContext);
  const [open, setOpen] = useState(false);

  const userButtonTxt = !firebaseData.email
    ? "Ingresar"
    : firebaseData.firebaseUser?.displayName?.split(" ")[0];

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
          <Image
            src="/images/favforme_logo_white.webp"
            width={245}
            height={192}
          />
        </NavItem>
        <NavItem href="/#brands">Empresas</NavItem>
        <NavItem onClick={handleContactClick}>Contacto</NavItem>
        <NavItem isProfileButton onClick={() => router.push("/perfil")}>
          {userButtonTxt}
        </NavItem>
        <User onClick={() => router.push("/perfil")}>
          <Image src="/images/icon_user.svg" width={75} height={75} />
          <p>{userButtonTxt}</p>
        </User>
      </Ul>
    </Nav>
  );
};

export { NavBar };
