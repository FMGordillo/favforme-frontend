import { useRouter } from "next/router";
import NextLink from "next/link";
import { cloneElement, FunctionComponent } from "react";
import { Item, SpanLink, Link } from "./styles";

interface NavItemProps {
  href?: string;
  image?: boolean;
  onClick?: () => void;
}

export const NavItem: FunctionComponent<NavItemProps> = ({
  children,
  onClick,
  href,
}) => {
  const router = useRouter();
  const props = Object.assign(
    {},
    href ? { href } : {},
    onClick ? { onClick } : {}
  );
  const isCurrent = router?.route === href;
  return (
    // TODO: Hacer que este "current" sea una clase, para el testing e2e
    <Item current={isCurrent} image>
      {onClick ? (
        cloneElement(<Link />, { onClick, ...props, children })
      ) : (
        <NextLink href={href || "/"}>
          <SpanLink>{children}</SpanLink>
        </NextLink>
      )}
    </Item>
  );
};
