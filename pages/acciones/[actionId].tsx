import { Container, LayoutComponent as Layout } from "components";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Action, favors as data } from "../../lib/data";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{
  props: {
    action: Action;
  };
}> => {
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
    <Layout>
      <Container>
        <h1>{action.title}</h1>
        <p>{action.description}</p>
        <h2>Historia sobre {action.owner}</h2>
        <p>{action.history}</p>
      </Container>
    </Layout>
  );
};

export default AccionPage;
