import {
  ArrowLeft,
  ArrowRight,
  BUTTON_TYPE,
  Embla,
  EmblaButton,
  EmblaContainer,
  EmblaSlide,
} from "./styles";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselProps = {
  embla: UseEmblaCarouselType;
  images: string[];
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

const Carousel: FunctionComponent<CarouselProps> = ({ embla, images }) => {
  const [ref, instance] = embla;
  const [buttonEnbled, setButtonEnabled] = useState({
    prev: false,
    next: true,
  });
  const scrollPrev = useCallback(() => instance && instance.scrollPrev(), [
    instance,
  ]);
  const scrollNext = useCallback(() => instance && instance.scrollNext(), [
    instance,
  ]);

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
    <Embla ref={ref}>
      <EmblaContainer>
        {images.map((image) => (
          <EmblaSlide key={image}>
            <Image src={image} priority width={500} height={300} />
          </EmblaSlide>
        ))}
      </EmblaContainer>
      <PrevButton handleClick={scrollPrev} enabled={buttonEnbled.prev} />
      <NextButton handleClick={scrollNext} enabled={buttonEnbled.next} />
    </Embla>
  );
};

export { Carousel };
