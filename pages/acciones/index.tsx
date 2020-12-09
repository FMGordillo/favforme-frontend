// import { gql, useQuery } from "@apollo/client";
import { Action } from "components/Landing/Actions/Action";
import { NextPage } from "next";
import styled from "styled-components";
import {
  Button,
  Container,
  Header,
  LayoutComponent as Layout,
  Title,
} from "../../components";
import { favors as data } from "../../lib/data";

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

// const GET_ACTIONS = gql`
//   {
//     favors {
//       id
//       title
//     }
//   }
// `;

const ActionsPage: NextPage = () => {
  // const { data, loading } = useQuery(GET_ACTIONS);
  return (
    <Layout
      headProps={{
        title: `Acciones`,
      }}
    >
      <Header />
      <Container>
        <StyledTitle>Acciones Activas</StyledTitle>
        {data?.favors.length > 0 &&
          data?.favors.map((favor, i) => (
            <ActionContainer key={i}>
              <Action data={favor} />
              <hr />
            </ActionContainer>
          ))}
        <JoinUsContainer>
          <p>
            Si sos una ONG es hora de potenciar tu esfuerzo con FavForMe.
            <br />
            Hagamos juntos un lugar mejor para vivir.
          </p>
          <a
            href="https://forms.gle/tfVmgg7pYP3StgJc8"
            target="_blank"
            rel="noreferrer"
          >
            <Button color="secondary">Sumar mi ONG</Button>
          </a>
        </JoinUsContainer>
      </Container>
    </Layout>
  );
};

export default ActionsPage;
