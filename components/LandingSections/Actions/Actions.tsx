import { Action } from "lib/types";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Title } from "../../styles";
import { ActionComponent } from "./Action";
import { Carousel } from "./Carousel";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing(2)}em;
`;

interface ActionsProps {
  actions?: Action[];
}

const ActionsComponent: FunctionComponent<ActionsProps> = ({ actions }) => {
  const [current, setCurrent] = useState(0);

  // TODO: Mejorar estos IFs
  const changeCurrent = useCallback(
    (newVal: number) => {
      if (newVal !== actions.length - 1 && current === actions.length - 1) {
        setCurrent(0);
      } else if (newVal < 0) {
        setCurrent(Math.abs(newVal));
      } else {
        setCurrent(newVal);
      }
    },
    [actions?.length, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      changeCurrent(current + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [current, changeCurrent]);

  const handleClickNavigation = (to: "back" | "forward") => {
    changeCurrent(to === "back" ? current - 1 : current + 1);
  };

  return (
    <StyledContainer id="actions">
      <Title>Acciones Activas</Title>
      <Carousel
        current={current}
        handleBack={() => handleClickNavigation("back")}
        handleForward={() => handleClickNavigation("forward")}
      >
        {actions &&
          actions.length > 0 &&
          actions.map((action, i) => <ActionComponent key={i} data={action} />)}
      </Carousel>
    </StyledContainer>
  );
};

export { ActionsComponent };
