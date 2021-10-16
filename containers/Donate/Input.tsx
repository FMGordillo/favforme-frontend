import { BaseInput, RequiredField, StyledInput } from "./styles";
import { FormValues } from "./";
import { FunctionComponent } from "react";
import { useFormikContext } from "formik";

type InputProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  name: keyof FormValues;
  container?: FunctionComponent;
};

/**
 * NOTE: This component takes Formik context
 */
const Input: FunctionComponent<InputProps> = ({
  name,
  label,
  required,
  container: Component,
  placeholder,
}) => {
  const formik = useFormikContext<FormValues>();
  const Container = Component || BaseInput;

  // TODO: Missing `type` handler
  return (
    <Container>
      <label htmlFor={name}>
        {label} {required && <RequiredField>*</RequiredField>}
      </label>
      <StyledInput
        id={name}
        placeholder={placeholder || ""}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onReset={formik.handleReset}
        onChange={formik.handleChange}
        hasError={!!formik.errors[name]}
      />
    </Container>
  );
};

export { Input };
