import {
  Action as ActionComponent,
  Container,
  Layout,
  ProposeMyONG,
} from "@/components";
import { ActionContainer, StyledTitle } from "./styles";
import { Action } from "@/lib/types";
import { NextPage } from "next";

interface ActionsPageProps {
  data: Action[];
}

export const ActionsPage: NextPage<ActionsPageProps> = ({ data }) => {
  return (
    <Layout header title="Acciones">
      <Container>
        <StyledTitle>Acciones Activas</StyledTitle>
        <ProposeMyONG />
        {data && (data.length || 0) > 0 ? (
          data.map((action) => (
            <ActionContainer key={action.id}>
              <ActionComponent data={action} />
            </ActionContainer>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Por favor, intentá más tarde</p>
        )}
      </Container>
    </Layout>
  );
};
