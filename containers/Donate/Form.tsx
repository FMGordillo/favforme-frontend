import { FormikErrors } from "formik";
import { ChangeEvent, FormEvent } from "react";
import { FormValues } from "./";
import { DonateButton, ErrorText, MainContainer } from "./styles";

interface DonationFormProps {
  loading: boolean;
  submitLoading: boolean;
  errors: FormikErrors<FormValues>;
  values: FormValues;
  handleChange: (e: ChangeEvent<any>) => void;
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
}

const DonationForm = ({
  handleSubmit,
  values,
  errors,
  loading,
  handleChange,
  submitLoading,
}: DonationFormProps): JSX.Element => {
  return (
    <MainContainer onSubmit={handleSubmit}>
      <h1>Formulario</h1>
      <label htmlFor="amount">Monto a donar (en pesos)</label>
      <input
        required
        id="amount"
        type="number"
        name="amount"
        disabled={submitLoading}
        placeholder="100"
        value={values.amount}
        onChange={handleChange}
      />
      {errors.amount && (
        <ErrorText aria-labelledby="amount">{errors.amount}</ErrorText>
      )}
      <label htmlFor="email">Email</label>
      <input
        required
        id="email"
        type="text"
        name="email"
        disabled={submitLoading}
        value={values.email}
        onChange={handleChange}
        placeholder="juanperez@gmail.com"
      />
      {errors.email && (
        <ErrorText aria-labelledby="email">{errors.email}</ErrorText>
      )}
      <DonateButton
        type="submit"
        disabled={
          submitLoading ||
          loading ||
          Object.values(errors).find((er) => er !== "") !== undefined
        }
      >
        {submitLoading ? "Generando..." : "Generar link a MercadoPago"}
      </DonateButton>
    </MainContainer>
  );
};

export { DonationForm };
