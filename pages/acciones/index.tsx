// import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import styled from "styled-components";
import {
  Button,
  Header,
  LayoutComponent as Layout,
  Title,
} from "../../components";
import { favors as data } from "../../lib/data";

const StyledTitle = styled(Title)`
  text-align: center;
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
      <StyledTitle>Acciones Activas</StyledTitle>
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
      {data?.favors.length > 0 &&
        data?.favors.map((favor, i) => <p key={i}>{favor.title}</p>)}
    </Layout>
  );
};

export default ActionsPage;
