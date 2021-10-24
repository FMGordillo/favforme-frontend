import {
  ArrowLeft,
  ArrowRight,
  BUTTON_TYPE,
  Embla,
  EmblaButton,
  EmblaContainer,
  EmblaSlide,
} from "./styles";
import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyledComponent } from "styled-components";
import { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselEl = {
  key: string | number;
  component: ReactNode;
};

type CarouselProps = {
  embla: UseEmblaCarouselType;
  overrides?: {
    Main?: StyledComponent<"div", any>; // default <Embla />
    Container?: StyledComponent<"div", any>; // default <EmblaContainer />
    Slide?: StyledComponent<"div", any>; // default <EmblaSlide />
  };
  elements: CarouselEl[];
};

type NavigationButtonProps = {
  enabled: boolean;
  handleClick: () => void;
};

const PrevButton: FunctionComponent<NavigationButtonProps> = ({
  enabled,
  handleClick,
}) => {
  return (
    <EmblaButton
      action={BUTTON_TYPE.PREV}
      onClick={handleClick}
      disabled={!enabled}
    >
      <ArrowLeft scale={2} />
    </EmblaButton>
  );
};

const NextButton: FunctionComponent<NavigationButtonProps> = ({
  enabled,
  handleClick,
}) => {
  return (
    <EmblaButton
      action={BUTTON_TYPE.NEXT}
      onClick={handleClick}
      disabled={!enabled}
    >
      <ArrowRight scale={2} />
    </EmblaButton>
  );
};

/**
 * TODO: Improve styling, make it SOLID
 */
const Carousel: FunctionComponent<CarouselProps> = ({
  embla,
  elements,
  overrides,
}) => {
  const [ref, instance] = embla;
  const [buttonEnbled, setButtonEnabled] = useState({
    prev: false,
    next: true,
  });
  const scrollPrev = useCallback(
    () => instance && instance.scrollPrev(),
    [instance]
  );
  const scrollNext = useCallback(
    () => instance && instance.scrollNext(),
    [instance]
  );

  // Components to render. TODO: Improve code somehow?
  const Main = overrides?.Main || Embla;
  const Container = overrides?.Container || EmblaContainer;
  const Slide = overrides?.Slide || EmblaSlide;

  // Components to render. TODO: Improve code somehow?
  const Main = overrides?.Main || Embla;
  const Container = overrides?.Container || EmblaContainer;
  const Slide = overrides?.Slide || EmblaSlide;

  const onSelect = useCallback(() => {
    if (!instance) return;
    setButtonEnabled({
      prev: instance.canScrollPrev(),
      next: instance.canScrollNext(),
    });
  }, [instance]);

  useEffect(() => {
    if (!instance) return;
    instance.on("select", onSelect);
    onSelect();
  }, [instance, onSelect]);

  return (
    <Main ref={ref}>
      <Container>
        {elements.map(({ key, component }) => (
          <Slide key={key}>{component}</Slide>
        ))}
      </Container>
      <PrevButton handleClick={scrollPrev} enabled={buttonEnbled.prev} />
      <NextButton handleClick={scrollNext} enabled={buttonEnbled.next} />
    </Main>
  );
};

export {
  Carousel,
  Embla as BaseMainEmbla,
  EmblaContainer as BaseEmblaContainer,
  EmblaSlide as BaseEmblaSlide,
};
