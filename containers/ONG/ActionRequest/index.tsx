import * as Yup from "yup";
import { Container, FormField, Layout } from "@/components";
import { Form, Formik } from "formik";
import { NextPage } from "next";

interface ActionRequestFormValues {
  title: string;
}

interface ActionRequestProps {
  onSubmit: (values: ActionRequestFormValues) => Promise<void>;
}

const ActionRequestSchema = Yup.object().shape({
  title: Yup.string().required().label("Nombre de acción").min(5),
});

export const ActionRequestContainer: NextPage<ActionRequestProps> = ({
  onSubmit,
}) => {
  const initialValues: ActionRequestFormValues = {
    title: "",
  };

  return (
    <Layout header title="Sumá tu acción">
      <Container>
        <h1>Hola bb</h1>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={ActionRequestSchema}
        >
          {() => (
            <Form>
              <FormField name="title" />
              <button type="submit">Submit :v</button>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};
