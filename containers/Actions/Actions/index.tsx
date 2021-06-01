import { Action, LoadingAction, Container, Layout, Title } from "@/components";
import { useActions } from "@/hooks";
import { ActionContainer, JoinUsContainer, StyledTitle } from "./styles";
import { NextPage } from "next";

export const ActionsPage: NextPage = () => {
  const { data, isValidating } = useActions({ take: 5 });

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
        {isValidating ? (
          <>
            <ActionContainer>
              <LoadingAction />
            </ActionContainer>
            <ActionContainer>
              <LoadingAction />
            </ActionContainer>
            <ActionContainer>
              <LoadingAction />
            </ActionContainer>
          </>
        ) : data?.actions && (data?.actions.length || 0) > 0 ? (
          data?.actions.map((action, i) => (
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
