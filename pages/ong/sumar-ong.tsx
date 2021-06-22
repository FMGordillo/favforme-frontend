import { NextPage } from "next";
import { ONGRequestContainer } from "@/containers";

export interface ONGRequestFormValues {
  name: string;
  cuit: number | undefined;
  representative_name: string;
  representative_email: string;
}

const ONGRequest: NextPage = () => {
  const onSubmit = async (values: ONGRequestFormValues) => {
    console.log("TODO", values);
  };

  return <ONGRequestContainer onSubmit={onSubmit} />;
};

export default ONGRequest;
