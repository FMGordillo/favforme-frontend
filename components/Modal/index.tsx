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
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
    e.preventDefault();
    // @ts-ignore
    if (e.target.id === "background") {
      handleModal();
    }
    // setFadeType("out");
  };

  useEffect(() => {
    ref.current = document.querySelector("#modal");
  }, []);

  if (modal) {
    return createPortal(
      <Background id="background" onClick={handleClick}>
        <ModalContainer id="modal">{modalContent}</ModalContainer>
      </Background>,
      //@ts-ignore
      ref.current
    );
  } else return null;
};

export { ModalComponent as Modal };
