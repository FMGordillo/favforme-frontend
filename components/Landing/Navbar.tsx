import Image from "next/image";
import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  max-height: 250px; /* From the Logo */
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
const Item = styled.li`
  flex: 1;
  font-family: dosis, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  & > a > div {
    max-width: 150px;
  }
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    text-decoration: underline;
  }
`;

const NavItem: FunctionComponent<{ href?: string }> = ({
  children,
  href = "#",
}) => (
  <Item>
    <Link href={href}>{children}</Link>
  </Item>
);

const NavBar: FunctionComponent<{ isScrolled?: boolean }> = ({
  isScrolled = 400,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (window) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Nav>
      <Ul>
        <NavItem>FavForMe</NavItem>
        <NavItem>Empresas</NavItem>
        <NavItem>
          <Image
            src="/images/favforme_logo_white.png"
            width={245}
            height={192}
          />
        </NavItem>
        <NavItem>Marcas</NavItem>
        <NavItem>Contacto</NavItem>
      </Ul>
    </Nav>
  );
};

export { NavBar };
