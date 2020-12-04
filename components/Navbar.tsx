import Image from "next/image";
import React, { cloneElement, FunctionComponent, useState } from "react";
import styled from "styled-components";

interface ScrolledI {
  isScrolled?: boolean;
  scrollingDown?: boolean;
}

const Nav = styled.nav<ScrolledI>`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
  max-height: 250px; /* From the Logo */
  border-radius: 0 0 100% 100%/0 0 25% 25%;
  transition: all 300ms;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* TODO */
  }
`;
const MobileNavigator = styled.div<{ open?: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  z-index: 9;
  height: ${({ theme }) => theme.spacing(1)}em;
  width: 100vw;
  padding: 1em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: block;
  }
`;

const Ul = styled.ul<{ open?: boolean }>`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    transform: translateY(-100%);
    background: ${({ theme }) => theme.color.primary.dark};
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    margin: 0;
    transition: transform 250ms ease-in;
    & > :nth-child(3) {
      display: none;
    }

    ${({ open }) => open && "transform: translateY(0%);"}

    position: fixed;
    width: 100vw;

    & > :nth-child(3) {
      display: none;
    }

    & > * {
      margin: 1em;
    }

    & > :last-child {
      margin-bottom: 2em;
    }
  }
`;
const Item = styled.li<{ image?: boolean }>`
  flex: 1;
  font-family: dosis, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  ${({ image }) => image && "max-width: 200px;"}
  & > a > div {
    max-width: 150px;
  }
`;
const Link = styled.a`
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 300ms;
  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.color.secondary.main};
  }
`;

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
  const props = Object.assign({}, href && { href }, onClick && { onClick });
  return (
    <Item image>{cloneElement(<Link />, { onClick, ...props, children })}</Item>
  );
};

interface NavBarProps {
  isScrolled?: boolean;
  toggleModal?: () => void;
}

const NavBar: FunctionComponent<NavBarProps> = ({
  //isScrolled = 350,
  toggleModal,
}) => {
  const [open, setOpen] = useState(false);
  //const [scrollPosition, setScrollPosition] = useState(0);
  //const [isGoingDown, setIsGoingDown] = useState(true);

  const handleMobileOpen = () => {
    setOpen(!open);
  };

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   if (position > scrollPosition) {
  //     // Going down!
  //     setIsGoingDown(true);
  //   } else {
  //     setIsGoingDown(false);
  //   }
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener("scroll", handleScroll, { passive: true });
  //   }
  //   return () => {
  //     if (window) {
  //       window.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

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
