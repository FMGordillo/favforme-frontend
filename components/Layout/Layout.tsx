import { FunctionComponent } from "react";
import { HeadComponent, HeadProps } from "../Head";
import { Footer } from "./Footer";
import styled from "styled-components";

interface LayoutProps {
  footer?: boolean;
  headProps?: HeadProps;
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
  headProps,
  children,
}) => (
  <Container>
    <HeadComponent {...headProps} />
    {children}
    {footer && <Footer />}
  </Container>
);

export { Layout };
