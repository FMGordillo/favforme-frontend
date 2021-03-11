import { Action, Button } from "@/components";
import { ActionI } from "@/lib/types";
import { useRouter } from "next/router";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Title } from "../../styles";
import { Carousel } from "./Carousel";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing(2)}em;
`;

interface ActionsProps {
  actions?: ActionI[];
}

const ActionsComponent: FunctionComponent<ActionsProps> = ({ actions }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  // TODO: Improve this
  const changeCurrent = useCallback(
    (newVal: number) => {
      if (!actions) return;

      if (newVal !== actions.length - 1 && current === actions.length - 1) {
        setCurrent(0);
      } else if (newVal < 0) {
        setCurrent(Math.abs(newVal));
      } else {
        setCurrent(newVal);
      }
    },
    [actions, current]
  );

  const handleClickNavigation = (to: "back" | "forward") => {
    changeCurrent(to === "back" ? current - 1 : current + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeCurrent(current + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [current, changeCurrent]);

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
          actions.map((action, i) => <Action key={i} data={action} />)}
      </Carousel>
      <Button onClick={() => router.push("/acciones")}>Ver todas</Button>
    </StyledContainer>
  );
};

export { ActionsComponent };
