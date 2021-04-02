import {
  FunctionComponent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
} from "react";
import { Background, ModalContainer } from "./styles";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

// type FadeType = "in" | "out";

/**
 * TODO: "fadeType"?
 */
const ModalComponent: FunctionComponent<ModalProps> = ({
  open,
  onClose,
  children,
}) => {
  const mounted = useRef();
  const background = useRef<HTMLDivElement>(null);
  // const [fadeType, setFadeType] = useState<FadeType>("in");

  const handleEscKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    // setFadeType("out");
  };

  const handleClick = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
    e.preventDefault();
    // setFadeType("out");
    onClose();
  };

  useEffect(() => {
    if (!mounted.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.addEventListener("keydown", handleEscKeyDown, false);
      //   setTimeout(() => setFadeType("in"), 0);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      mounted.current = true;
    } else {
      //   setFadeType("out");
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [open]);

  return (
    <ModalContainer open={open}>
      {children}
      {background && <Background ref={background} onClick={handleClick} />}
    </ModalContainer>
  );
};

export { ModalComponent as Modal };
