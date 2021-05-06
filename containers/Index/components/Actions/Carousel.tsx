import { LoadingAction } from "@/components";
import { Container } from "@/components/styles";
import { calculateBreakpoint } from "@/utils/styled";
import { Children, FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

interface CarouselProps {
  current?: number;
  loading: boolean;
  handleBack: () => void;
  handleForward: () => void;
}

const StyledContainer = styled(Container)<{ hasData?: boolean }>`
  display: grid;
  align-items: center;
  justify-items: center;
  ${({ hasData }) => hasData && `box-shadow: 1em 1em #4963d3;`}
`;

const Section = styled.div<{ active?: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  min-width: ${calculateBreakpoint("md")};
  ${({ theme }) => theme.breakpoints.down("md")} {
    min-width: auto;
  }
`;

// const Icon = styled(FontAwesomeIcon)`
//   width: 2.5em !important;
//   height: 2.5em !important;
//   :hover {
//     cursor: pointer;
//   }
// `;

const Carousel: FunctionComponent<CarouselProps> = ({
  loading,
  current = 0,
  children,
  // handleBack,
  // handleForward,
}) => {
  const childrenMap = Children.map(children, (child) => child);
  const hasData = childrenMap?.length && childrenMap.length > 0 ? true : false;
  const [iCurrent, setICurrent] = useState<number>(current);

  useEffect(() => {
    setICurrent(current);
  }, [current]);

  return (
    <StyledContainer hasData={hasData || loading}>
      {/* <Icon icon={faArrowAltCircleLeft} onClick={handleBack} /> */}
      {hasData ? (
        !!childrenMap &&
        childrenMap?.map((child, i) => (
          <Section key={i} active={i === iCurrent}>
            {child}
          </Section>
        ))
      ) : loading ? (
        <div style={{ minWidth: 960 }}>
          <LoadingAction />
        </div>
      ) : (
        <span>Por favor, intentá en otro momento</span>
      )}
      {/* <Icon icon={faArrowAltCircleRight} onClick={handleForward} /> */}
    </StyledContainer>
  );
};

export { Carousel };
