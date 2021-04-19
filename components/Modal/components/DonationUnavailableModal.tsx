import Image from "next/image";
import { DialogContainer, DialogTitle } from "../styles";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Formik, useFormik } from "formik";

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

export const DonationUnavailableModal: FunctionComponent = () => {
  const [change, handleChange] = useState("");
  return (
    <DialogContainer>
      <DialogTitle>
        <span role="img" aria-label="construction icon">
          🚧
        </span>
        Seguimos trabajando{" "}
        <span role="img" aria-label="construction icon">
          🏗️
        </span>
        ️
      </DialogTitle>
      <ModalContent>
        <p>Please donate</p>
        <input onChange={(e) => handleChange(e.target.value)} />
      </ModalContent>
    </DialogContainer>
  );
};
