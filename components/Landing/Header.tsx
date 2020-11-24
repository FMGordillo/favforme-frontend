import styled from "lib/styled";
import Image from "next/image";
import { FunctionComponent } from "react";

const Nav = styled.nav`
  background: green;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavBar: FunctionComponent = ({ children }) => (
  <Nav>
    <Ul>{children}</Ul>
  </Nav>
);

const Item = styled.li`
  flex: 1;
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

const Header: FunctionComponent = () => (
  <div>
    <NavBar>
      <NavItem>FavForMe</NavItem>
      <NavItem>Empresas</NavItem>
      <NavItem>
        <Image src="/images/favforme_logo_white.png" width={245} height={192} />
      </NavItem>
      <NavItem>Marcas</NavItem>
      <NavItem>Contacto</NavItem>
    </NavBar>
  </div>
);

export { Header };
