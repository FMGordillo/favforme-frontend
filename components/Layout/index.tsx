import { FunctionComponent } from "react";
import { HeadComponent, HeadProps } from "../Head";
import { Footer } from "./Footer";

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
