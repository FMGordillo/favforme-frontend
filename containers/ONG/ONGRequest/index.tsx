import * as Yup from "yup";
import { Button, Layout } from "@/components";
import { Form, Formik } from "formik";
import { Container } from "./styles";
import { FormField } from "./components";
import { NextPage } from "next";
import { ONGRequestFormValues } from "@/pages/ong/sumar-ong";

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
});

export const ONGRequestContainer: NextPage<ONGRequestProps> = ({
  onSubmit,
}) => {
  const initialValues: ONGRequestFormValues = {
    name: "",
    cuit: undefined,
    representative_name: "",
    representative_email: "",
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
              <FormField name="name" label="Nombre de ONG" />
              <FormField name="cuit" label="CUIT" />
              <FormField
                name="representative_name"
                label="Tu nombre (representante)"
              />
              <FormField
                name="representative_email"
                label="Tu email (reprensentante)"
              />
              <Button type="submit">Enviar mi solicitud</Button>
              <Button color="secondary" textColor="black" type="reset">
                Limpiar datos
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};
