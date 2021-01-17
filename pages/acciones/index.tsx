import { ActionComponent } from "components/LandingSections/Actions";
import { GET_ACTIONS } from "lib/queries";
import { GetActionsData } from "lib/types";
import { NextPage } from "next";
import useSWR from "swr";
import styled from "styled-components";
import {
  Container,
  Header,
  LayoutComponent as Layout,
  Title,
} from "../../components";

const StyledTitle = styled(Title)`
  text-align: center;
`;
const ActionContainer = styled.div`
  max-width: 960px;
  margin: 4em auto;
`;
const JoinUsContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.secondary.main};
`;

const ActionsPage: NextPage = () => {
  const { data } = useSWR<{ actions: GetActionsData }>(GET_ACTIONS);

  return (
    <Layout
      headProps={{
        title: `Acciones`,
      }}
    >
      <Header />
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
        {data?.actions &&
          data.actions.length > 0 &&
          data.actions.map((action, i) => (
            <ActionContainer key={i}>
              <ActionComponent data={action} />
            </ActionContainer>
          ))}
      </Container>
    </Layout>
  );
};

export default ActionsPage;
