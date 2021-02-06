import { Container, Layout, Title } from "components";
import { ActionComponent } from "components/LandingSections/Actions";
import { useActions } from "lib/hooks";
import { NextPage } from "next";
import styled from "styled-components";

const StyledTitle = styled(Title)`
  text-align: center;
`;
const ActionContainer = styled.div`
  max-width: 960px;
  margin: 4em auto;
`;
const JoinUsContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const ActionsPage: NextPage = () => {
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

export default ActionsPage;
