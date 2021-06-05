import { Container as BaseContainer } from "@/components";
import styled from "styled-components";

export const Container = styled(BaseContainer)`
  text-align: center;
  margin: 64px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;

  grid-gap: 28px;

  button:first-child {
    justify-self: right;
  }
  button:last-child {
    justify-self: left;
  }
`;

export const RadioGroup = styled.div`
  display: grid;
`;
