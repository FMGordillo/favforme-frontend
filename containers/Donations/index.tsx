import { ActionI } from "@/lib/types";
import { Container, Layout } from "@/components";
import {
  ErrorText,
  MainContainer,
  ActionContainer,
  DonateButton,
} from "./styles";
import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";

interface DonationProps {
  user: any;
  query: {
    id?: string;
  };
  action: ActionI | undefined;
}

interface FormValues {
  email: string;
  amount: number;
}

export const DonationContainer: FunctionComponent<DonationProps> = ({
  action,
  query,
  user,
}) => {
  const [loading, setLoading] = useState(false);
  const [donationUrl, setDonationUrl] = useState("");

  const handleSubmit = async ({ amount, email }: FormValues) => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, any>> = {};
    const regexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");
    if (values.amount > 200000) {
      errors.amount =
        "Para montos mayores a $200.000 por favor comunicarse con soporte@favforme.com";
    }
    if (!regexEmail.test(values.email)) {
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
              ? `${formik.values.email} donará $
              ${formik.values.amount.toLocaleString("es-ES", {
                currency: "ARS",
              })}`
              : ""}
          </p>
        </ActionContainer>
        <section>
          <MainContainer onSubmit={formik.handleSubmit}>
            <h1>Formulario</h1>
            <label htmlFor="amount">Monto a donar (en pesos)</label>
            <input
              id="amount"
              type="number"
              name="amount"
              disabled={loading}
              placeholder="100"
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
            {formik.errors.amount && (
              <ErrorText aria-labelledby="amount">
                {formik.errors.amount}
              </ErrorText>
            )}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              disabled={loading}
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="juanperez@gmail.com"
            />
            {formik.errors.email && (
              <ErrorText aria-labelledby="email">
                {formik.errors.email}
              </ErrorText>
            )}
            <DonateButton
              type="submit"
              disabled={loading}
              onClick={() => formik.handleSubmit()}
            >
              {loading ? "Generando..." : "Generar link a MercadoPago"}
            </DonateButton>
          </MainContainer>
        </section>
        <section>
          <h1>Link para donar</h1>
          {donationUrl && !loading && (
            <a
              style={{ textDecoration: "none" }}
              rel="noreferrer noopener"
              href={donationUrl}
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
