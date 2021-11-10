import { Background, ModalContainer } from "./styles";
import {
  FunctionComponent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
} from "react";
import { ModalContext } from "@/lib/context";
import { createPortal } from "react-dom";

const ModalComponent: FunctionComponent = () => {
  const { handleModal, modalContent, modal } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
    // @ts-ignore
    if (e.target.id === "background") {
      e.preventDefault();
      handleModal();
    }
  };

  useEffect(() => {
    modalRef.current = document.querySelector("#modal");
  }, []);

  if (modal) {
    return createPortal(
      <Background id="background" onClick={handleClick}>
        <ModalContainer id="modal">{modalContent}</ModalContainer>
      </Background>,
      //@ts-ignore
      modalRef.current
    );
  } else return null;
};

export { ModalComponent as Modal };
