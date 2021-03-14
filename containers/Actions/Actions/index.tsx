import { Action, Container, Layout, Title } from "@/components";
import { useActions } from "@/hooks";
import { ActionContainer, JoinUsContainer, StyledTitle } from "./styles";
import { NextPage } from "next";

export const ActionsPage: NextPage = () => {
  const { data } = useActions({ take: 5 });

  return (
    <Layout header title="Acciones">
      <Container>
        <StyledTitle>Acciones Activas</StyledTitle>
        <JoinUsContainer>
          <Title color="primary" weight="bold">
            ODS activos hoy
          </Title>
          <p>
            Si sos una ONG es hora de potenciar tu esfuerzo con FavForMe.
            <br />
            Hagamos juntos un lugar mejor para vivir.
          </p>
        </JoinUsContainer>
        {data?.actions && data.actions.length > 0 ? (
          data.actions.map((action, i) => (
            <ActionContainer key={i}>
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