import * as Yup from "yup";
import { Button, Form, FormField, Layout } from "@/components";
import { ButtonContainer, Container } from "../styles";
import { Formik } from "formik";
import { NextPage } from "next";

interface ActionRequestFormValues {
  title: string;
  description: string;
  objective: number;
  peopleBeneficted: number;
}

interface ActionRequestProps {
  onSubmit: (values: ActionRequestFormValues) => Promise<void>;
}

// TODO: Improve this: https://github.com/jquense/yup/blob/master/docs/typescript.md
const ActionRequestSchema = Yup.object().shape({
  title: Yup.string().required().label("Nombre de acción").min(5),
  description: Yup.string()
    .required()
    .label("Descripción de la acción")
    .min(30),
  objective: Yup.string()
    .matches(/^[0-9]+$/, "Solo números")
    .required()
    .label("Monto mínimo requerido")
    .min(1000),
  peopleBeneficted: Yup.string()
    .matches(/^[0-9]+$/, "Solo números")
    .required()
    .label("Gente beneficiada")
    .min(10),
});

export const ActionRequestContainer: NextPage<ActionRequestProps> = ({
  onSubmit,
}) => {
  const initialValues: ActionRequestFormValues = {
    title: "",
    description: "",
    objective: 0,
    peopleBeneficted: 0,
  };

  return (
    <Layout header title="Sumá tu acción">
      <Container>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={ActionRequestSchema}
        >
          {() => (
            <Form>
              <FormField name="title" label="Nombre de acción" />
              <FormField name="description" label="Descripción de la acción" />
              <FormField
                name="objective"
                label="Objetivo (en pesos argentinos)"
              />
              <ButtonContainer>
                <Button type="reset" color="secondary" textColor="black">
                  Limpiar datos
                </Button>
                <Button type="submit">Enviar mi solicitud</Button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};
