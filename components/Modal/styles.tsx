import styled from "styled-components";

export const ModalContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const DialogContainer = styled.div`
  z-index: 1050;
  width: 100%;
  background: white;
  border-radius: 40px;
  ${({ theme }) => `
      padding: ${theme.spacing(1)}em;
  `}
`;
export const DialogTitle = styled.h1``;

export const BlackBackground = styled.div``;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1040;
  background: rgba(0, 0, 0, 0.5);

  display: grid;
  align-items: center;
  justify-items: center;
`;
