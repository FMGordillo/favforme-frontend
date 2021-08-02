import { Layout } from "@/components";
import { NextPage } from "next";
// import { Organization } from "@/lib/types";
import { PaymentValues } from "@/containers";
// import { useRouter } from "next/router";

export interface ONGRequestFormValues {
  name: string;
  cuit: number | undefined;
  representative_name: string;
  representative_email: string;
  has_payment_accounts: PaymentValues;
}

const ONGRequest: NextPage = () => {
  // const router = useRouter();
  // const onSubmit = async (values: ONGRequestFormValues) => {
  //   console.log("TODO", values);

  //   // TODO: Submit to server the new organization
  //   // TODO: Get the ID from the organization
  //   const ong: Organization = {
  //     id: "TEST",
  //     name: "TEST ONG",
  //     actions: [],
  //     socialNetworks: [],
  //   };
  //   router.push(`/ong/sumar-accion?ong=${ong.id}`);
  // };

  // return <ONGRequestContainer onSubmit={onSubmit} />;
  return (
    <Layout title="Sumá tu ONG" header footer>
      <div style={{ display: "grid" }}>
        <iframe
          title="Formulario para ONGs"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfWzFILW7QNGqz-VzvxJRPqwEL3m3vtalHHRRxYPsKCU7GGkw/viewform?embedded=true"
          width="640"
          height="1580"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          style={{ justifySelf: "center" }}
        >
          Cargando…
        </iframe>
      </div>
    </Layout>
  );
};

export default ONGRequest;
