import { FunctionComponent, useContext } from "react";
import { HeadComponent, HeadProps } from "../Head";
import { Header, HeaderProps } from "../../components";
import { Footer } from "./Footer";
import styled, { ThemeContext } from "styled-components";
import useDarkMode from "use-dark-mode";

interface LayoutProps {
  title?: string;
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
  title = "Home",
  footer = true,
  header,
  headProps,
  headerProps,
  children,
}) => {
  const myTheme = useContext(ThemeContext);
  const darkMode = useDarkMode();
  console.log(myTheme);
  return (
    <Container>
      <button onClick={() => darkMode.toggle()}>Change mode</button>
      <HeadComponent title={title} {...headProps} />
      {header && <Header title={title} {...headerProps} />}
      {children}
      {footer && <Footer />}
    </Container>
  );
};

export { Layout };
