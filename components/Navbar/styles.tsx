import styled from "styled-components";
interface NavProps {
  isScrolled?: boolean;
  scrollingDown?: boolean;
}

// FIXME: Cambiar esto de nombre
interface MobileNavigatorProps {
  open?: boolean;
}

interface ItemProps {
  image?: boolean;
  current?: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
  max-height: 250px; /* From the Logo */
  border-radius: 0 0 100% 100%/0 0 25% 25%;
  transition: all 300ms;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* TODO: Finish this */
  }
`;
export const MobileNavigator = styled.div<MobileNavigatorProps>`
  display: none;
  position: fixed;
  top: 0;
  z-index: 9;
  height: ${({ theme }) => theme.spacing(1)}em;
  width: 100vw;
  padding: 1em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: block;
  }
`;

export const Ul = styled.ul<MobileNavigatorProps>`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    transform: translateY(-100%);
    background: ${({ theme }) => theme.palette.primary.dark};
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    margin: 0;
    transition: transform 250ms ease-in;
    & > :nth-child(3) {
      display: none;
    }

    ${({ open }) => open && "transform: translateY(0%);"}

    position: fixed;
    width: 100vw;

    & > :nth-child(3) {
      display: none;
    }

    & > * {
      margin: 1em;
    }

    & > :last-child {
      margin-bottom: 2em;
    }
  }
`;
export const Item = styled.li<ItemProps>`
  flex: 1;
  font-family: dosis, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  ${({ image }) => image && "max-width: 200px;"} & > a > div {
    max-width: 150px;
  }
  a {
    color: ${({ current, theme }) =>
      current ? theme.palette.secondary.main : "white"};
  }
`;
export const Link = styled.a`
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 300ms;
  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const SpanLink = styled.span`
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 300ms;
  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
