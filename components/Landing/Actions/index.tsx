import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { favors as data } from "../../../lib/data";
import { Container, Title } from "../../styles";
import { Action } from "./Action";
import { Carousel } from "./Carousel";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(2)}em;
`;

// const GET_ACTIONS = gql`
//   {
//     favors {
//       id
//       title
//     }
//   }
// `;

// interface GetActionsData {
//   favors: [Favor];
// }

const ActionsSection: FunctionComponent = () => {
  // const { data } = useQuery<GetActionsData>(GET_ACTIONS);
  const [current, setCurrent] = useState(0);

  // TODO: Mejorar estos IFs
  const changeCurrent = useCallback(
    (newVal: number) => {
      if (
        newVal !== data.favors.length - 1 &&
        current === data.favors.length - 1
      ) {
        setCurrent(0);
      } else if (newVal < 0) {
        setCurrent(Math.abs(newVal));
      } else {
        setCurrent(newVal);
      }
    },
    [current]
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
        {data?.favors.length > 0 &&
          data.favors.map((favor, i) => <Action key={i} data={favor} />)}
      </Carousel>
    </StyledContainer>
  );
};

export { ActionsSection as Actions };
