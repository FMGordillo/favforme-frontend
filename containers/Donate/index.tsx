import { Container, Layout } from "@/components";
import { event } from "@/lib/gtag";
import { ActionI } from "@/lib/types";
import axios from "axios";
import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { DonationForm } from "./Form";
import { ActionContainer } from "./styles";

interface DonationProps {
  user: any;
  loading: boolean;
  query: {
    id?: string;
  };
  action: ActionI | undefined;
}

export interface FormValues {
  email: string;
  amount: number;
}

export const DonationContainer: FunctionComponent<DonationProps> = ({
  user,
  query,
  action,
  loading,
}) => {
  const [donationUrl, setDonationUrl] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const trackDonationLead = (
    action: "new_draft_donation" | "donation",
    amount: number
  ) => {
    event({
      action,
      category: "donation",
      label: `environment:${process.env.NEXT_PUBLIC_ENVIRONMENT}`,
      value: amount,
    });
  };

  const handleSubmit = async ({ amount, email }: FormValues) => {
    trackDonationLead("new_draft_donation", amount);
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

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      amount: 0,
    },
    validate,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    formik.setValues({
      email: user?.email,
      amount: formik.values.amount,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Layout header title={`Donacion - ${action?.title}`}>
      <Container>
        <ActionContainer>
          <p>
            {formik.values.email && formik.values.amount > 0
              ? `${
                  formik.values.email
                } donará $${formik.values.amount.toLocaleString("es-ES", {
                  currency: "ARS",
                })}`
              : ""}
          </p>
        </ActionContainer>
        <section>
          <DonationForm
            loading={loading}
            errors={formik.errors}
            values={formik.values}
            submitLoading={submitLoading}
            handleSubmit={formik.handleSubmit}
            handleChange={formik.handleChange}
          />
        </section>
        <section>
          <h1>Link para donar</h1>
          {donationUrl && !submitLoading && (
            <a
              style={{ textDecoration: "none" }}
              rel="noreferrer noopener"
              href={donationUrl}
              onClick={() => {
                trackDonationLead("donation", formik.values.amount);
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
    </Layout>
  );
};
