import { FormLabels } from "../";
import { FormValues } from "./";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";

const ErrorContainer = styled.div<{ show: boolean }>`
  grid-area: error;
  background-color: hsl(50, 50, 50);

  border: ${({ show }) => (show ? "1px solid red" : "none")};
  transition: all 100ms;
`;

/**
 * NOTE: This component takes Formik context
 */
const Error: FunctionComponent = () => {
  const formik = useFormikContext<FormValues>();
  const errors = Object.entries(formik.errors);
  const renderErrors = errors.map(([value, error]) => (
    <li key={value}>
      {/* TODO: Fix this */}
      {/* @ts-ignore */}
      {FormLabels[value]}: {error}
    </li>
  ));
  return (
    <ErrorContainer show={errors.length > 0}>
      <ul>{renderErrors}</ul>
    </ErrorContainer>
  );
};

export { Error };
