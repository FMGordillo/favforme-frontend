import { Action, Container, Layout, Title } from "@/components";
import { ActionContainer, JoinUsContainer, StyledTitle } from "./styles";
import { ActionI } from "@/lib/types";
import { NextPage } from "next";

interface ActionsPageProps {
  data: ActionI[];
}

export const ActionsPage: NextPage<ActionsPageProps> = ({ data }) => {
  return (
    <Layout header title="Acciones">
      <Container>
        <StyledTitle>Acciones Activas</StyledTitle>
        <JoinUsContainer>
          <Title color="#9f1b32" weight="bold">
            ODS activos hoy
          </Title>
          <p style={{ color: "#9f1b32" }}>
            Si sos una ONG es hora de potenciar tu esfuerzo con FavForMe.
            <br />
            Hagamos juntos un lugar mejor para vivir.
          </p>
        </JoinUsContainer>
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
