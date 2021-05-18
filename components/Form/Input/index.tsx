import { Input } from "./styles";
import { ChangeEvent, FocusEvent, FunctionComponent } from "react";

type InputTypes = "email" | "number" | "password" | "file" | "tel" | "text";

interface Input {
  id?: string;
  name: string;
  type?: InputTypes;
  placeholder?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 *
 * If no id is provided, it will use "name" as id
 */
export const FormInput: FunctionComponent<Input> = ({
  name,
  type = "text",
  placeholder,
  id,
  onBlur,
  onChange,
}) => {
  return (
    <Input
      id={id ?? name}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
