import { ToggleCheckbox, ToggleLabel, ToggleSwitch } from "./styles";
import { FunctionComponent } from "react";

type SwitchProps = {
  text: string;
  checked: boolean;
  handleClick: () => void;
};

export const Switch: FunctionComponent<SwitchProps> = ({
  text,
  checked,
  handleClick,
}) => {
  return (
    <ToggleLabel>
      <ToggleCheckbox type="checkbox" checked={checked} onClick={handleClick} />
      <ToggleSwitch />
      <ToggleLabel>{text}</ToggleLabel>
    </ToggleLabel>
  );
};
