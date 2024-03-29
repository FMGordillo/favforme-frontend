import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const SocialNetworks = styled.div`
  display: grid;
  max-width: 400px;
  padding: 1em;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & > * {
    color: white;
    transition: all 300ms;

    :hover {
      cursor: pointer;
    }

    & > * {
      width: 2em !important;
      height: 2em !important;
    }
    &:hover {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;

export const MapSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing(0.5)}em ${theme.spacing(1)}em`};
  max-width: 1024px;
  & > :first-child {
    justify-self: center;
    align-self: center;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;

    & > :last-child {
      text-align: center;
      justify-self: center;
    }
  }
`;

export const MapUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

export const MapLi = styled.li`
  line-height: 2.5;
`;

export const Link = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: all ease-in-out 300ms;
  &:hover {
    border-color: white;
  }
`;

export const Copyright = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  text-align: center;
  p {
    margin: 0;
    padding: 28px 0 16px;
    color: white;
    text-transform: uppercase;
  }
  .credits {
    font-size: 14px;
    text-transform: none;
    padding: 0 0 24px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;
