import {
  Amount,
  DonateButton,
  Email,
  FormContainer,
  LogoContainer,
  Name,
  Surname,
} from "./styles";
import React, { FunctionComponent } from "react";
import { Error } from "./Error";
import Image from "next/image";
import { Input } from "./Input";
import { useFormikContext } from "formik";

type DonationFormProps = {
  orgLogo: string | null;
};

/**
 * NOTE: This component takes Formik context
 */
const DonationForm: FunctionComponent<DonationFormProps> = ({ orgLogo }) => {
  const formik = useFormikContext();
  const isDisabled =
    formik.isSubmitting ||
    Object.values(formik.errors).find((err) => err !== "") !== undefined;

  return (
    // TODO: Why is this needed?
    <FormContainer onSubmit={formik.handleSubmit}>
      <Input
        required
        name="amount"
        label="Monto a donar (en pesos)"
        placeholder="500"
        container={Amount}
      />
      <LogoContainer>
        <Image src={orgLogo || ""} alt="Logo de ONG" width={130} height={130} />
      </LogoContainer>
      <Input
        required
        name="email"
        label="Email"
        placeholder="juanperez@gmail.com"
        container={Email}
      />
      <Input name="name" label="Nombre" placeholder="Juan" container={Name} />
      <Input
        name="surname"
        label="Apellido"
        placeholder="Perez"
        container={Surname}
      />
      <div style={{ gridArea: "anon" }}>Agregar selector de ES ANONIMO</div>
      <Error />
      <DonateButton style={{ gridArea: "button" }} disabled={isDisabled}>
        {formik.isSubmitting ? "Generando..." : "Generar link a MercadoPago"}
      </DonateButton>
    </FormContainer>
  );
};

export { DonationForm };
