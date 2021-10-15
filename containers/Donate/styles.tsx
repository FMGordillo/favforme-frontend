import { Button } from "@/components";
import { Form } from "formik";
import styled from "styled-components";

export const ActionContainer = styled.section`
  display: grid;
`;

export const FormContainer = styled(Form)`
  display: grid;
  grid-gap: 14px;
  max-width: 420px;
  margin: 0 auto;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.75em;
`;

export const DonateButton = styled(Button)``;

export const InputContainer = styled.div``;
