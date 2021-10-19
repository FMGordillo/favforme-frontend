import { Container as BaseContainer, Button } from "@/components";
import { Form } from "formik";
import styled from "styled-components";

export const Container = styled(BaseContainer)`
  margin-top: 24px;
`;

export const FormContainer = styled(Form)`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  grid-gap: 14px;
  max-width: 420px;
  grid-template-areas:
    "amount logo"
    "email email"
    "name surname"
    "anon anon"
    "error error"
    "button button";
`;

export const RequiredField = styled.span`
  color: red;
`;

export const DonateButton = styled(Button)``;

export const StyledInput = styled.input<{ hasError: boolean }>`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 18px;

  transition: border 0.2s ease-in-out;

  border-color: ${({ hasError }) => (hasError ? "red" : "#ccc")};

  :focus {
    border-color: ${({ hasError }) => (hasError ? "red" : "#aaa")};
  }
  :focus-visible {
    border-color: ${({ hasError }) => (hasError ? "red" : "#aaa")};
  }
  :hover {
    border: 1px solid #aaa;
    border-color: ${({ hasError }) => (hasError ? "red" : "#aaa")};
  }
`;

export const BaseInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Amount = styled(BaseInput)`
  input {
    font-size: 28px;
    font-family: Dosis;
  }
  grid-area: amount;
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  justify-self: center;
`;

export const Email = styled(BaseInput)`
  grid-area: email;
  width: 100%;
`;

export const Name = styled(BaseInput)`
  grid-area: name;
`;

export const Surname = styled(BaseInput)`
  grid-area: surname;
`;
