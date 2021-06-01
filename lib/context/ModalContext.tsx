import { useModal, UseModalReturn } from "@/components/Modal/useModal";
import { createContext, FunctionComponent } from "react";
import { Modal } from "../../components";

export const ModalContext = createContext<UseModalReturn>({} as UseModalReturn);

export const ModalProvider: FunctionComponent = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};
