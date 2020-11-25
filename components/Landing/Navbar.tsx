import Image from "next/image";
import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

interface ScrolledI {
  isScrolled?: boolean;
}

const Nav = styled.nav<ScrolledI>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  max-height: 250px; /* From the Logo */
  border-radius: 0 0 100% 100%/0 0 25% 25%;
  background: ${({ isScrolled }) => (isScrolled ? "black" : "transparent")};
  transition: background 300ms;

  ${({ theme }) => theme.breakpoints.down("sm")} {
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    align-items: center;
    & > :nth-child(3) {
      display: none;
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
  color: white;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    text-decoration: underline;
  }
`;

const NavItem: FunctionComponent<{ href?: string; image?: boolean }> = ({
  children,
  href = "#",
}) => (
  <Item image>
    <Link href={href}>{children}</Link>
  </Item>
);

const NavBar: FunctionComponent<{ isScrolled?: boolean }> = ({
  isScrolled = 350,
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
    <Nav isScrolled={scrollPosition > isScrolled}>
      <Ul>
        <NavItem>FavForMe</NavItem>
        <NavItem>Empresas</NavItem>
        <NavItem image>
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
