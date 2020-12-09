import { FunctionComponent } from "react";
import { Footer } from "../components";
import { HeadComponent, HeadProps } from "./Head";

interface LayoutProps {
  footer?: boolean;
  headProps?: HeadProps;
  toggleModal?: () => void;
}

const LayoutComponent: FunctionComponent<LayoutProps> = ({
  footer = true,
  headProps,
  children,
}) => (
  <>
    <HeadComponent {...headProps} />
    {children}
    {footer && <Footer />}
  </>
);

export { LayoutComponent };
