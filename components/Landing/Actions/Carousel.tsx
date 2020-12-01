import { Children, FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
interface CarouselProps {
  current?: number;
}

const Section = styled.div<{ active?: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
`;

const Carousel: FunctionComponent<CarouselProps> = ({
  current = 0,
  children,
}) => {
  const childrenMap = Children.map(children, (child) => child);
  const [iCurrent, setICurrent] = useState<number>(current);

  useEffect(() => {
    setICurrent(current);
  }, [current]);

  return (
    <div>
      {childrenMap.length &&
        childrenMap.map((child, i) => (
          <Section key={i} active={i === iCurrent}>
            {child}
          </Section>
        ))}
    </div>
  );
};

export { Carousel };
