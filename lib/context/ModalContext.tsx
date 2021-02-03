import { Modal } from "components";
import { createContext, FunctionComponent, ReactNode, useState } from "react";

interface UseModalReturn {
  modal: boolean;
  modalTitle?: string;
  modalContent: ReactNode;
  handleModal: (content?: ReactNode) => void;
}

export const ModalContext = createContext<UseModalReturn>({} as UseModalReturn);

const useModal = (): UseModalReturn => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>("");

  const handleModal = (content: ReactNode = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return {
    modal,
    modalContent,
    handleModal,
  };
};

export const ModalProvider: FunctionComponent = ({ children }) => {
  const data = useModal();
  return (
    <ModalContext.Provider value={data}>
      <Modal open={data.modal} onClose={data.handleModal}>
        {data.modalContent}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};
