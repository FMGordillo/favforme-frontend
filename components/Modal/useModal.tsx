import { ReactNode, useState } from "react";

export interface UseModalReturn {
  modal: boolean;
  handleModal: (content?: ReactNode) => void;
  modalContent: ReactNode;
}

export const useModal = (): UseModalReturn => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(undefined);

  const handleModal = (content: ReactNode) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};
