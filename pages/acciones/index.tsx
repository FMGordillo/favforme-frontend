// import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import styled from "styled-components";
import { Header, LayoutComponent as Layout, Title } from "../../components";
import { favors as data } from "../../lib/data";

const StyledTitle = styled(Title)`
  text-align: center;
`;

// const GET_ACTIONS = gql`
//   {
//     favors {
//       id
//       title
//     }
//   }
// `;

const AccionesPage: NextPage = () => {
  // const { data, loading } = useQuery(GET_ACTIONS);
  return (
    <Layout
      headProps={{
        title: `Acciones`,
      }}
    >
      <Header />
      <StyledTitle>Acciones</StyledTitle>
      {data?.favors.length > 0 &&
        data?.favors.map((favor, i) => <p key={i}>{favor.title}</p>)}
    </Layout>
  );
};

export default AccionesPage;
