import * as Yup from "yup";
import { Button, Form, FormField, Layout } from "@/components";
import { ButtonContainer, Container, RadioGroup } from "../styles";
import { ErrorMessage, Field, Formik } from "formik";
import { BaseErrorMessage } from "@/components/Form/FormField/styles";
import { NextPage } from "next";
import { ONGRequestFormValues } from "@/pages/ong/sumar-ong";

export enum PaymentValues {
  NULL = "",
  AMBAS = "Ambas",
  NO_TENGO = "NoTengo",
  MERCADO_PAGO = "MercadoPago",
  CUENTA_BANCARIA = "CuentaBancaria",
}

interface ONGRequestProps {
  onSubmit: (values: ONGRequestFormValues) => Promise<void>;
}

const ONGRequestSchema = Yup.object().shape({
  name: Yup.string().required().label("Nombre de ONG").min(3),
  cuit: Yup.string()
    .required()
    .label("CUIT")
    .matches(/^[0-9]+$/, "Solo números")
    .min(11, "Tu CUIT debe tener 11 números")
    .max(11, "TU CUIT debe tener 11 números"),
  representative_name: Yup.string()
    .required()
    .label("Tu nombre (representante)"),
  representative_email: Yup.string()
    .required()
    .label("Tu email (representante)")
    .email(),
  has_payment_accounts: Yup.mixed<PaymentValues>()
    .required()
    .label("¿Tenés MercadoPago y/o cuenta bancaria?")
    .oneOf(Object.values(PaymentValues)),
});

export const ONGRequestContainer: NextPage<ONGRequestProps> = ({
  onSubmit,
}) => {
  const initialValues: ONGRequestFormValues = {
    name: "",
    cuit: undefined,
    representative_name: "",
    representative_email: "",
    has_payment_accounts: PaymentValues.NULL,
  };
  return (
    <Layout title="Sumar mi ONG" header>
      <Container>
        <p>
          Por favor, llen&aacute; estos datos, y nos pondremos en contacto
          contigo
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={ONGRequestSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <FormField name="name" label="Nombre (ONG)" />
              <FormField name="cuit" label="CUIT (ONG)" />
              <FormField
                name="representative_name"
                label="Tu nombre (representante)"
              />
              <FormField
                name="representative_email"
                label="Tu email (reprensentante)"
              />
              {/* <FormField
                name="has_payment_accounts"
                label="¿Ten&eacute;s MercadoPago o cuenta bancaria?"
              /> */}

              <RadioGroup role="group" aria-labelledby="has_payment_accounts">
                <label htmlFor="has_payment_accounts_1">
                  <Field
                    id="has_payment_accounts_1"
                    type="radio"
                    name="has_payment_accounts"
                    value={PaymentValues.MERCADO_PAGO}
                  />
                  Tengo MercadoPago
                </label>
                <label htmlFor="has_payment_accounts_2">
                  <Field
                    id="has_payment_accounts_2"
                    type="radio"
                    name="has_payment_accounts"
                    value={PaymentValues.CUENTA_BANCARIA}
                  />
                  Tengo cuenta bancaria
                </label>
                <label htmlFor="has_payment_accounts_3">
                  <Field
                    id="has_payment_accounts_3"
                    type="radio"
                    name="has_payment_accounts"
                    value={PaymentValues.AMBAS}
                  />
                  Tengo ambas
                </label>
                <label htmlFor="has_payment_accounts_4">
                  <Field
                    id="has_payment_accounts_4"
                    type="radio"
                    name="has_payment_accounts"
                    value={PaymentValues.NO_TENGO}
                  />
                  No tengo
                </label>
                <ErrorMessage
                  name="has_payment_accounts"
                  component={BaseErrorMessage}
                />
              </RadioGroup>

              <ButtonContainer>
                <Button color="secondary" textColor="black" type="reset">
                  Limpiar datos
                </Button>
                <Button type="submit">Guardar</Button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};
