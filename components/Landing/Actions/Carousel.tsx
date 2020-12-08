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
  /*box-shadow: 1em 1em ${({ theme }) => theme.color.gray.main};*/
  box-shadow: 1em 1em #dcdcdc;
`;

const Section = styled.div<{ active?: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  min-width: ${calculateBreakpoint("md")};
  ${({ theme }) => theme.breakpoints.down("md")} {
    min-width: auto;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 2.5em !important;
  height: 2.5em !important;
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
      {/* <Icon icon={faArrowAltCircleLeft} onClick={handleBack} /> */}
      {childrenMap.length &&
        childrenMap.map((child, i) => (
          <Section key={i} active={i === iCurrent}>
            {child}
          </Section>
        ))}
      {/* <Icon icon={faArrowAltCircleRight} onClick={handleForward} /> */}
    </StyledContainer>
  );
};

export { Carousel };
