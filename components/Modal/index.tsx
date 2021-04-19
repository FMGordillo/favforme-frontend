import { ModalContext } from "@/lib/context";
import {
  FunctionComponent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { Background, ModalContainer } from "./styles";

const ModalComponent: FunctionComponent = () => {
  const { handleModal, modalContent, modal } = useContext(ModalContext);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
    e.preventDefault();
    console.log("HANDLE CLICK");
    // setFadeType("out");
    handleModal();
  };

  useEffect(() => {
    ref.current = document.querySelector("#modal");
  }, []);

  if (modal) {
    return createPortal(
      <Background onClick={handleClick}>
        <ModalContainer onClick={() => console.log("CLICK")}>
          {modalContent}
        </ModalContainer>
      </Background>,
      //@ts-ignore
      ref.current
    );
  } else return null;
};

export { ModalComponent as Modal };
