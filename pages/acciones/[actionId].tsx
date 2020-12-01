import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { favors as data } from "../../lib/data";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { actionId } = context.query;
  const action = data.favors.find((favor) => favor.id == actionId);
  return {
    props: {
      action,
    }, // will be passed to the page component as props
  };
};

const AccionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ action }) => {
  return (
    <div>
      <section>
        <h1>{action.title}</h1>
        <p>{action.description}</p>
      </section>
      <h2>Historia sobre {action.owner}</h2>
      <p>{action.history}</p>
    </div>
  );
};

export default AccionPage;
