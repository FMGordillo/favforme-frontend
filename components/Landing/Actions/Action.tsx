import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Action as ActionI } from "../../../lib/data";
import { Container } from "../styles";

interface ActionProps {
  data?: ActionI;
}

const StyledContainer = styled(Container)``;

const Action: FunctionComponent<ActionProps> = ({ data }) => {
  return (
    <StyledContainer>
      <h1>
        <Link href={`/acciones/${data.id}`}>{data.title.toUpperCase()}</Link>
      </h1>
      Porcentaje completo:{" "}
      {(
        (data.objective.current.amount * 100) /
        data.objective.final.amount
      ).toFixed()}
      %
    </StyledContainer>
  );
};

export { Action };
