import { FunctionComponent } from "react";
import styled from "styled-components";
import { Container } from "./styles";

const StyledContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0 ${({ theme }) => theme.spacing(0.5)}em;
  }
`;

const Actions: FunctionComponent = () => (
  <StyledContainer id="actions">ACCIONES</StyledContainer>
);

export { Actions };
