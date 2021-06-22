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
      <Field name={name}>
        {/* @ts-ignore  */}
        {({ field }) => (
          <BaseField
            id={name}
            name={name}
            {...field}
            value={field.value || ""}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={BaseErrorMessage} />
    </FormFieldContainer>
  );
};
