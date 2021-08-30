import { ChangeEvent, FocusEvent, FunctionComponent } from "react";
import { Input } from "./styles";

type InputTypes = "email" | "number" | "password" | "file" | "tel" | "text";

interface InputI {
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
export const FormInput: FunctionComponent<InputI> = (props) => (
  <Input {...props} id={props.id ?? props.name} />
);
