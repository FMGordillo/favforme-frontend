import { DonateButton, FormContainer } from "./styles";
import React, { FunctionComponent } from "react";
import { Input } from "./Input";
import { useFormikContext } from "formik";

const DonationForm: FunctionComponent = () => {
  const formik = useFormikContext();
  const isDisabled =
    Object.values(formik.errors).find((err) => err !== "") !== undefined;

  return (
    // TODO: Why is this needed?
    <FormContainer onSubmit={formik.handleSubmit}>
      <Input name="amount" label="Monto a donar (en pesos)" />
      <Input name="email" label="Email" placeholder="juanperez@gmail.com" />
      <Input name="name" label="Nombre" placeholder="Juan" />
      <Input name="surname" label="Apellido" placeholder="Perez" />
      <DonateButton disabled={formik.isSubmitting || isDisabled}>
        {formik.isSubmitting ? "Generando..." : "Generar link a MercadoPago"}
      </DonateButton>
    </FormContainer>
  );
};

export { DonationForm };
