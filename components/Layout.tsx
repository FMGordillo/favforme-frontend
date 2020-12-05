import { FunctionComponent } from "react";
import { Footer } from "../components";
import { HeadComponent, HeadProps } from "./Head";

interface LayoutProps {
  headProps?: HeadProps;
  toggleModal?: () => void;
}

const LayoutComponent: FunctionComponent<LayoutProps> = ({
  headProps,
  children,
}) => (
  <>
    <HeadComponent {...headProps} />
    {children}
    <Footer />
  </>
);

export { LayoutComponent };
