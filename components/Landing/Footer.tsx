import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";

const MapSection = styled.section`
  display: flex;
  background-color: #27358c;
  padding: ${({ theme }) => theme.spacing(2)}em;
  justify-content: space-around;
  align-items: center;
  & > * {
    flex: 1;
  }
  & > :first-child {
    text-align: center;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(1)}em;
  }
`;
const MapUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-flow: colum wrap;
  overflow: hidden;
  list-style: none;
`;
const MapLi = styled.li`
  line-height: 2.5;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

const MapItem: FunctionComponent<{ href?: string }> = ({
  children,
  href = "#",
}) => (
  <MapLi>
    <Link href={href}>{children}</Link>
  </MapLi>
);

const Copyright = styled.section`
  background-color: #1b233c;
  p {
    padding: 2em;
    margin: 0;
    text-align: center;
    color: #707070;
  }
`;

const Footer: FunctionComponent = () => (
  <>
    <MapSection>
      <div>
        <Image src="/images/favforme_logo_white.png" width={245} height={192} />
      </div>
      <MapUl>
        <MapItem>Home</MapItem>
        <MapItem>FavForMe</MapItem>
        <MapItem>Empresas</MapItem>
        <MapItem>Términos y Condiciones</MapItem>
      </MapUl>
    </MapSection>
    <Copyright>
      <p>FavForMe 2020 - All rights reserved</p>
    </Copyright>
  </>
);

export { Footer };
