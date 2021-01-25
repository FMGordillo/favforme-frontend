import { useRouter } from "next/router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "components/Menu";
import Image from "next/image";
import React, { cloneElement, FunctionComponent, useState } from "react";
import { Item, Link, MobileNavigator, Nav, Ul } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";

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
  const router = useRouter();
  const { logout } = useAuth0();
  const [open, setOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
        <button onClick={() => router.push("/perfil")}>Perfil</button>
        <button onClick={() => logout()}>Cerrar sesion</button>
      </Menu>
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
