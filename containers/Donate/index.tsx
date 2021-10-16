import React, { FunctionComponent, useState } from "react";
import { ActionI } from "@/lib/types";
import { Container } from "./styles";
import { DonationForm } from "./Form";
import { Formik } from "formik";
import { Layout } from "@/components";
import axios from "axios";
import { event } from "@/lib/gtag";

interface DonationProps {
  user: any;
  query: {
    id?: string;
  };
  action: ActionI | null;
}

export interface FormValues {
  email: string;
  amount: number;
  name: string;
  surname: string;
}

export const FormLabels: Record<keyof FormValues, string> = {
  email: "Email",
  amount: "Monto a donar",
  name: "Nombre",
  surname: "Apellido",
};

export const DonationContainer: FunctionComponent<DonationProps> = ({
  user,
  query,
  action,
}) => {
  const donationTitle = action?.title
    ? `Donacion - ${action.title}`
    : "Donacion";
  const [donationUrl, setDonationUrl] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const trackDonationLead = (
    action: "nueva_donacion_intencion" | "donacion",
    amount: number
  ) => {
    event({
      action,
      category: "donacion",
      label: `environment:${process.env.NEXT_PUBLIC_ENVIRONMENT}`,
      value: amount,
    });
  };

  const handleSubmit = async ({ amount, email }: FormValues) => {
    trackDonationLead("nueva_donacion_intencion", amount);
    setSubmitLoading(true);
    try {
      if (!query.id || !amount || typeof amount !== "number" || !email)
        throw new Error("The required fields are missing");

      const response = await axios.post("/mp/generate", {
        amount,
        actionTitle: action?.title
          .toLowerCase()
          .split(" ")
          .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
          .join(" "),
        actionId: query.id,
        userData: {
          email,
          name: user?.name,
          surname: user?.surname,
        },
      });

      setDonationUrl(response.data.url);

      console.log(response);
    } catch (error) {
      console.info("TODO: HANDLE THIS");
      console.error(error);
    } finally {
      setSubmitLoading(false);
    }
  };

  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, any>> = {};
    const regexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");
    if (values.amount > 200000) {
      errors.amount = (
        <span>
          Para montos mayores a <b>$200.000</b> por favor comunicarse con{" "}
          <a
            href="mailto:soporte@favforme.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            soporte@favforme.com
          </a>
        </span>
      );
    }
    if (values.email && !regexEmail.test(values.email)) {
      errors.email = "Ingrese un email valido";
    }
    return errors;
  };

  return (
    <Layout header title={donationTitle}>
      <Formik
        validate={validate}
        onSubmit={handleSubmit}
        initialValues={{ email: "", amount: 0, name: "", surname: "" }}
      >
        {(formikProps) => (
          <Container>
            <DonationForm />
            <section>
              <h1>Link para donar</h1>
              {donationUrl && !submitLoading && (
                <a
                  style={{ textDecoration: "none" }}
                  rel="noreferrer noopener"
                  href={donationUrl}
                  onClick={() => {
                    trackDonationLead("donacion", formikProps.values.amount);
                  }}
                >
                  Done aqui{" "}
                  <span role="img" aria-label="blue heart">
                    💙
                  </span>
                </a>
              )}
            </section>
          </Container>
        )}
      </Formik>
    </Layout>
  );
};
