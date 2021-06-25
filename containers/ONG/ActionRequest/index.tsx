// import * as Yup from "yup";
import { Container, Layout } from "@/components";
import { NextPage } from "next";

// interface ActionRequestFormValues {
//   title?: string;
// }

// interface ActionRequestProps {
//   onSubmit: (values: ActionRequestFormValues) => Promise<void>;
// }

// const ActionRequestSchema = Yup.object();

export const ActionRequestContainer: NextPage = () => {
  return (
    <Layout header title="Sumá tu acción">
      <Container>
        <h1>Hola bb</h1>
      </Container>
    </Layout>
  );
};
