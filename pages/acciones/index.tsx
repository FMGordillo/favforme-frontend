import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";

const GET_ACTIONS = gql`
  {
    favors {
      id
      title
    }
  }
`;

const AccionesPage: NextPage = () => {
  const { data, loading } = useQuery(GET_ACTIONS);
  return (
    <div>
      <h1>Acciones</h1>
      {loading && <span>Loading</span>}
      {data?.favors.length > 0 &&
        data.favors.map((favor) => <p>{favor.title}</p>)}
    </div>
  );
};

export default AccionesPage;
