import styled from "styled-components";
import { FunctionComponent } from "react";

const LoaderComponent = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Loading: FunctionComponent = () => {
  return (
    <LoaderComponent>
      {/* TODO: Meter un <Spinner /> */}
      <span>Loading</span>
    </LoaderComponent>
  );
};
