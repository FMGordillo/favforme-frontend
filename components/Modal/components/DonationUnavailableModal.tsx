import { Button } from "@/components";
import { DialogContainer, DialogTitle } from "../styles";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
`;

/**
 * TODO: Finish this
 * TODO: Export it?
 */
export const DonationUnavailableModal: FunctionComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
  };

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
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={handleSubmit} type="submit">
          Suscribirme a novedades
        </Button>
      </ModalContent>
    </DialogContainer>
  );
};
