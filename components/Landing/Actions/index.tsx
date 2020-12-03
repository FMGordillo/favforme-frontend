import { favors as data } from "@/lib/data";
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Title } from "../styles";
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

const Actions: FunctionComponent = () => {
  // const { data } = useQuery<GetActionsData>(GET_ACTIONS);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!data?.favors.length) return;
      if (current === data.favors.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 5000);
  }, [current]);

  return (
    <StyledContainer id="actions">
      <Title>Acciones Activas</Title>
      {/* @ts-ignore */}
      <Carousel current={current}>
        {data?.favors.length > 0 &&
          data.favors.map((favor, i) => <Action key={i} data={favor} />)}
      </Carousel>
    </StyledContainer>
  );
};

export { Actions };
