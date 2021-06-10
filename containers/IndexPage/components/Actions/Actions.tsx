import { Action, Button } from "@/components";
import { ActionI } from "@/lib/types";
import { useRouter } from "next/router";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Title } from "@/components/styles";
import { Carousel } from "./Carousel";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0 ${({ theme }) => theme.spacing(2)}em !important;
  background: ${({ theme }) => theme.palette.primary.main};
`;

const StyledTitle = styled(Title)`
  color: white;
  padding: 0 0.25em;
  margin: 2em 0 1em;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

interface ActionsProps {
  loading: boolean;
  actions?: ActionI[];
}

const ActionsComponent: FunctionComponent<ActionsProps> = ({
  actions,
  loading,
}) => {
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
      <StyledTitle>Acciones destacadas</StyledTitle>
      <Carousel
        loading={loading}
        current={current}
        handleBack={() => handleClickNavigation("back")}
        handleForward={() => handleClickNavigation("forward")}
      >
        {actions &&
          actions.length > 0 &&
          actions.map((action, i) => <Action carousel key={i} data={action} />)}
      </Carousel>
      <Button
        color="white"
        textColor="#2142d2"
        onClick={() => router.push("/acciones")}
        style={{ marginTop: "2em", marginBottom: "2em" }}
        hoverColor="primary"
        hoverTextColor="black"
        hoverVariant="light"
      >
        Ver todas las acciones
      </Button>
    </StyledContainer>
  );
};

export { ActionsComponent };
