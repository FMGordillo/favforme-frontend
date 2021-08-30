import { HeadComponent, HeadProps } from "../Head";
import { Header, HeaderProps } from "../../components";
import { Footer } from "./Footer";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface LayoutProps {
  title?: string | undefined;
  footer?: boolean;
  header?: boolean;
  headProps?: HeadProps;
  headerProps?: HeaderProps;
  toggleModal?: () => void;
}

const Container = styled.main`
  background-color: ${({ theme }) => theme.palette.white.main};
`;

const Layout: FunctionComponent<LayoutProps> = ({
  title,
  footer = true,
  header,
  headProps,
  headerProps,
  children,
}) => {
  return (
    <Container>
      <HeadComponent title={title || ""} {...headProps} />
      {header && <Header title={title} {...headerProps} />}
      {children}
      {footer && <Footer />}
    </Container>
  );
};

export { Layout };
