import { LoadingAction } from "@/components";
import { Container, Section } from "./styles";
import { Children, FunctionComponent, useEffect, useState } from "react";

interface CarouselProps {
  current?: number;
  loading: boolean;
  handleBack: () => void;
  handleForward: () => void;
}

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
    <Container hasData={hasData || loading}>
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
    </Container>
  );
};

export { Carousel };
