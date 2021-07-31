import styled from "styled-components";
import { Form as BaseForm } from "formik";

export const Container = styled.div`
  text-align: center;
  margin: 64px;
`;

export const RadioGroup = styled.div`
  display: grid;
`;

export const Form = styled(BaseForm)`
  & > * {
    padding-bottom: 32px;
  }
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
