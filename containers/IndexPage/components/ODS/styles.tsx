import { ButtonLink, Container } from "@/components";
import styled from "styled-components";

export const HighlightText = styled.p`
  color: #027aa8;
  font-size: 1.25em;
  font-weight: 700;
  text-align: center !important;
  padding: 0 2em;
  max-width: 1024px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 2em 0 2.5em;
  }
  a {
    color: inherit;
    transition: color 300ms;
  }
  a:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ODSLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: ods;
  justify-self: center;
  margin: ${({ theme }) => theme.spacing(0.5)}em 0;
`;

export const ODSContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ods-container;

  & > * {
    margin: 0 0.5em;
    transition: all 500ms ease-in;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 4em 2em;
  }

  .img.smallest {
    width: 75px;
    opacity: 0.15;
    ${({ theme }) => theme.breakpoints.down("md")} {
      display: none;
    }
  }

  .img.smaller {
    width: 100px;
    opacity: 0.5;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      display: none;
    }
  }

  .img.small {
    width: 125px;
    opacity: 0.85;
  }
`;

export const ODSButton = styled(ButtonLink)`
  justify-self: center;
  width: 300px;
  margin-top: 2em;
  grid-area: button;
`;
