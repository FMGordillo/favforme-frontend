import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FunctionComponent, useContext, useState } from "react";
import { Menu } from "../../components/Menu";
import { ContactModal } from "../../components/Modal/components";
import { ModalContext } from "../../lib/context";
import { useUser } from "../../hooks";
import { NavItem } from "./NavItem";
import { MobileNavigator, Nav, Ul } from "./styles";

interface NavBarProps {
  isScrolled?: boolean;
}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const router = useRouter();
  const { user, firebaseData } = useUser();
  const { handleModal } = useContext(ModalContext);
  const [open, setOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
      <Menu
        toggleContainer={
          <FontAwesomeIcon
            size="2x"
            onClick={() => {
              setUserDropdownOpen((prev) => !prev);
            }}
            style={{ float: "right" }}
            icon={faUser}
          />
        }
        open={userDropdownOpen}
      >
        {firebaseData.id && (
          <button onClick={() => router.push("/perfil")}>Perfil</button>
        )}
        <button
          onClick={() =>
            firebaseData.id ? firebaseData.signOut() : router.push("/login")
          }
        >
          {firebaseData.id ? "Cerrar sesion" : "Iniciar sesión"}
        </button>
      </Menu>
      <Ul open={open}>
        <NavItem href="/">FavForMe</NavItem>
        <NavItem href="/#actions">Acciones</NavItem>
        <NavItem href="/#brands">Empresas</NavItem>
        <NavItem image href="/">
          <Image
            src="/images/favforme_logo_white.png"
            width={245}
            height={192}
          />
        </NavItem>
        <NavItem href="/nosotros">Nosotros</NavItem>
        <NavItem href="/#brands">App mobile?</NavItem>
        <NavItem onClick={handleContactClick}>Contacto</NavItem>
      </Ul>
    </Nav>
  );
};

export { NavBar };
