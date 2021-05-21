import { Button, FormInput } from "@/components";
import { DialogContainer, DialogTitle } from "../styles";
import { FunctionComponent } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { FormikValues, useFormik } from "formik";

const ModalContent = styled.div`
  text-align: center;
`;
const Fieldset = styled.fieldset`
  border: none;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    label {
      text-align: right;
    }
  }
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;

  justify-items: center;
`;

const schema = yup.object({
  email: yup.string().email().required(),
  firstName: yup.string().optional(),
});

export const DonationUnavailableModal: FunctionComponent = () => {
  const onSubmit = (e: FormikValues) => {
    console.log(e);
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    submitForm,
  } = useFormik({
    validationSchema: schema,
    initialValues: {
      email: "",
      firstName: "",
    },
    onSubmit,
  });

  return (
    <DialogContainer>
      <DialogTitle>
        <span role="img" aria-label="construction icon">
          🚧
        </span>{" "}
        Seguimos trabajando{" "}
        <span role="img" aria-label="construction icon">
          🏗️
        </span>
        ️
      </DialogTitle>
      <ModalContent>
        <p>Seguimos armando esta iniciativa, ¡no nos falta mucho!</p>
        <p>¿Querés que te avisemos cuando activemos las donaciones?</p>
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <div>
              <label htmlFor="email">Email</label>
              <FormInput
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="tu-email@correo.com"
              />
            </div>
            <div>
              <label htmlFor="firstName">Tu nombre (opcional)</label>
              <FormInput
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Lorenzo"
              />
            </div>
          </Fieldset>
          <Button disabled={!isValid} type="submit" onClick={submitForm}>
            Suscribirme a novedades
          </Button>
        </Form>
      </ModalContent>
    </DialogContainer>
  );
};
