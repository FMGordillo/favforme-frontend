import { FunctionComponent, ReactNode, cloneElement } from "react";
import { Item, Link } from "./styles";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  href?: string;
  image?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  isProfileButton?: boolean;
}

export const NavItem: FunctionComponent<NavItemProps> = ({
  isProfileButton,
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
    <Item current={isCurrent} image isProfileButton={!!isProfileButton}>
      {onClick ? (
        cloneElement(<Link />, { onClick, ...props, children })
      ) : (
        <NextLink href={href || "/"}>
          <Link>{children}</Link>
        </NextLink>
      )}
    </Item>
  );
};
