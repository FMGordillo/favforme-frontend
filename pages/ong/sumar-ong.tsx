import { NextPage } from "next";
import { ONGRequestContainer } from "@/containers";
import { Organization } from "@/lib/types";
import { useRouter } from "next/router";

export interface ONGRequestFormValues {
  name: string;
  cuit: number | undefined;
  representative_name: string;
  representative_email: string;
}

const ONGRequest: NextPage = () => {
  const router = useRouter();
  const onSubmit = async (values: ONGRequestFormValues) => {
    console.log("TODO", values);

    // TODO: Submit to server the new organization
    // TODO: Get the ID from the organization

    const ong: Organization = {
      id: "TEST",
      name: "TEST ONG",
      actions: [],
      socialNetworks: [],
    };
    router.push(`/ong/sumar-accion?ong=${ong.id}`);
  };

  return <ONGRequestContainer onSubmit={onSubmit} />;
};

export default ONGRequest;
