import { FC, ReactNode, createContext } from "react";
import { UseModalReturn, useModal } from "@/components/Modal/useModal";
import { Modal } from "@/components";

export const ModalContext = createContext<UseModalReturn>({} as UseModalReturn);

type ModalProviderProps = {
  children?: ReactNode;
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};
