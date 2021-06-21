import { BaseErrorMessage, BaseField, FormFieldContainer } from "./styles";
import { ErrorMessage, Field } from "formik";
import { FunctionComponent } from "react";

interface FormField {
  name: string;
  label?: string;
}

export const FormField: FunctionComponent<FormField> = ({ name, label }) => {
  return (
    <FormFieldContainer>
      <label htmlFor={name}>{label ?? name}</label>
      <Field id={name} name={name} component={BaseField} />
      <ErrorMessage name={name} component={BaseErrorMessage} />
    </FormFieldContainer>
  );
};
