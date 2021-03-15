import styled from "styled-components";
import { Button } from "@/components";

export const ActionContainer = styled.section`
  display: grid;
`;

export const MainContainer = styled.form`
  display: grid;
  grid-gap: 1em;
  max-width: 420px;
  margin: 0 auto;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.75em;
`;

export const DonateButton = styled(Button)``;
