import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calculateBreakpoint } from "lib/styled";
import React, { Children, FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../styles";
interface CarouselProps {
  current?: number;
  handleBack: () => void;
  handleForward: () => void;
}

const StyledContainer = styled(Container)`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Section = styled.div<{ active?: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  min-width: ${calculateBreakpoint("md")};
`;

const Icon = styled(FontAwesomeIcon)`
  width: 50px;
  :hover {
    cursor: pointer;
  }
`;

const Carousel: FunctionComponent<CarouselProps> = ({
  current = 0,
  children,
  handleBack,
  handleForward,
}) => {
  const childrenMap = Children.map(children, (child) => child);
  const [iCurrent, setICurrent] = useState<number>(current);

  useEffect(() => {
    setICurrent(current);
  }, [current]);

  return (
    <StyledContainer>
      <Icon icon={faArrowAltCircleLeft} onClick={handleBack} />
      {childrenMap.length &&
        childrenMap.map((child, i) => (
          <Section key={i} active={i === iCurrent}>
            {child}
          </Section>
        ))}
      <Icon icon={faArrowAltCircleRight} onClick={handleForward} />
    </StyledContainer>
  );
};

export { Carousel };
