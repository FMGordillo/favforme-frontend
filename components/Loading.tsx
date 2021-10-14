import { FunctionComponent } from "react";
import styled from "styled-components";

const LoaderComponent = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoading: FunctionComponent = () => {
  return (
    <LoaderComponent>
      {/* TODO: Meter un <Spinner /> */}
      <span>Loading</span>
    </LoaderComponent>
  );
};
