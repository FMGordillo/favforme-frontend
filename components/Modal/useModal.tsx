import { ReactNode, useState } from "react";

export interface UseModalReturn {
  modal: boolean;
  handleModal: (content?: ReactNode) => void;
  modalContent: ReactNode;
}

export const useModal = (): UseModalReturn => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const handleModal = (content: ReactNode = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};
