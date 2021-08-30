import { Container as BaseContainer } from "@/components";
import styled from "styled-components";

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;

  p {
    text-align: center;
  }
`;
