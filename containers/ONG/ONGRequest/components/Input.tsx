import { FunctionComponent } from "react";

export const Input: FunctionComponent = (props) => {
  console.log(props);
  return <input {...props.field} />;
};
