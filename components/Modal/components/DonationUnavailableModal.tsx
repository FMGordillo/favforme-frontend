import { Button, FormInput } from "@/components";
import { useNotifications } from "@/hooks";
import { event } from "@/lib/gtag";
import axios from "axios";
import { FormikValues, useFormik } from "formik";
import { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { DialogContainer, DialogTitle } from "../styles";

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
  const { createNotification } = useNotifications();

  const onSubmit = async (e: FormikValues) => {
    const { status } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/marketing/donation-user`,
      e
    );
    if (status === 201) {
      createNotification("Recibido, ¡Muchas gracias!", "success");
    } else {
      createNotification("Algo sucedió, por favor intentá más tarde", "error");
      console.log("OPA", status);
    }
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

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
      event({
        action: "unable_donation",
        category: "donation",
        label: `environment:production`,
        value: 0,
      });
    }
  }, []);

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
