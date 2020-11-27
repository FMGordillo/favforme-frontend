import {
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface ModalProps {
  open: boolean;
}

type FadeType = "in" | "out";

const ModalComponent: FunctionComponent<ModalProps> = ({ open }) => {
  const mounted = useRef();
  const [fadeType, setFadeType] = useState<FadeType>("in");

  const handleEscKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
  };

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount
      // @ts-ignore
      window.addEventListener("keydown", handleEscKeyDown, false);
      // @ts-ignore
      mounted.current = true;
    } else {
      // componentDidUpdate
      setFadeType("out");
    }

    return () => {
      // @ts-ignore
      window.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [open]);

  return <div>UN MODAL</div>;
};

export { ModalComponent as Modal };
