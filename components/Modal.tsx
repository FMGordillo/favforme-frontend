import {
  FunctionComponent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface ModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
}

type FadeType = "in" | "out";

const ModalContainer = styled.div<{ open?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

const DialogContainer = styled.div`
  z-index: 1050;
  width: 100%;
  background: white;
  padding: ${({ theme }) => theme.spacing(1)}em;
  margin: ${({ theme }) => theme.spacing(6)}em;
`;
const DialogTitle = styled.h1``;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
`;

const ModalComponent: FunctionComponent<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const mounted = useRef();
  const background = useRef();
  const [fadeType, setFadeType] = useState<FadeType>("in");

  const handleEscKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    setFadeType("out");
  };

  const handleClick = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
    e.preventDefault();
    setFadeType("out");
    onClose();
  };

  useEffect(() => {
    if (!mounted.current) {
      // @ts-ignore
      window.addEventListener("keydown", handleEscKeyDown, false);
      setTimeout(() => setFadeType("in"), 0);
      // @ts-ignore
      mounted.current = true;
    } else {
      setFadeType("out");
    }

    return () => {
      // @ts-ignore
      window.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [open]);

  return (
    <ModalContainer open={open}>
      <DialogContainer>
        <DialogTitle>{title}</DialogTitle>
        {children}
      </DialogContainer>
      <Background ref={background} onClick={handleClick} />
    </ModalContainer>
  );
};

export { ModalComponent as Modal };
