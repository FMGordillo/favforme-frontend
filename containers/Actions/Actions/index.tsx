import { Action, Container, Layout, ProposeMyONG } from "@/components";
import { ActionContainer, StyledTitle } from "./styles";
import { ActionIndex } from "@/pages";
import { NextPage } from "next";

interface ActionsPageProps {
  data: ActionIndex[];
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
              <Action data={action} />
            </ActionContainer>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Por favor, intentá más tarde</p>
        )}
      </Container>
    </Layout>
  );
};
