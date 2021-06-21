import { NextPage } from "next";
import { ONGRequestContainer } from "@/containers";

const ONGRequest: NextPage = () => {
  const onSubmit = () => {
    console.log("TODO");
  };

  return <ONGRequestContainer onSubmit={onSubmit} />;
};

export default ONGRequest;
