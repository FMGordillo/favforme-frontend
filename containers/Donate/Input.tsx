import { FormValues } from "./";
import { FunctionComponent } from "react";
import { InputContainer } from "./styles";
import { useFormikContext } from "formik";

type InputProps = {
  name: keyof FormValues;
  label: string;
  placeholder?: string;
};

const Input: FunctionComponent<InputProps> = ({ name, label, placeholder }) => {
  const formik = useFormikContext<FormValues>();

  // TODO: Missing `type` handler
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={placeholder || ""}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onReset={formik.handleReset}
        onChange={formik.handleChange}
      />
    </InputContainer>
  );
};

export { Input };
