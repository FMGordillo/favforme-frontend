import { FunctionComponent } from "react";
import { HeadComponent, HeadProps } from "./Head";

interface LayoutProps {
  headProps?: HeadProps;
}

const LayoutComponent: FunctionComponent<LayoutProps> = ({
  headProps,
  children,
}) => (
  <>
    <HeadComponent {...headProps} />
    {children}
  </>
);

export { LayoutComponent };
