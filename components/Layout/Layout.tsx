import { FunctionComponent } from "react";
import { HeadComponent, HeadProps } from "../Head";
import { Header, HeaderProps } from "components";
import { Footer } from "./Footer";
import styled from "styled-components";

interface LayoutProps {
  footer?: boolean;
  header?: boolean;
  headProps?: HeadProps;
  headerProps?: HeaderProps;
  toggleModal?: () => void;
}

// TODO: Arreglar esto
const Container = styled.div`
  /* display: grid; */
  /* min-height: 100vh; */
  /* grid-template-rows: 1fr auto; */
`;

const Layout: FunctionComponent<LayoutProps> = ({
  footer = true,
  header,
  headProps,
  headerProps,
  children,
}) => (
  <Container>
    <HeadComponent {...headProps} />
    {header && <Header {...headerProps} />}
    {children}
    {footer && <Footer />}
  </Container>
);

export { Layout };
