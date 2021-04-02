import styled from "styled-components";

export const ModalContainer = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export const DialogContainer = styled.div`
  ${({ theme }) => `
      z-index: 1050;
      width: 100%;
      background: white;
      padding: ${theme.spacing(1)}em;
      margin: ${theme.spacing(6)}em ${theme.spacing(4)}em;
      ${theme.breakpoints.down("md")} {
        margin: ${theme.spacing(4)}em ${theme.spacing(2)}em;
      }
      ${theme.breakpoints.down("sm")} {
        margin: ${theme.spacing(2)}em ${theme.spacing(1)}em;
      }
  `}
`;
export const DialogTitle = styled.h1``;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
`;
