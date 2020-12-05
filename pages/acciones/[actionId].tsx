import { Container, LayoutComponent as Layout } from "components";
import { toPascalCase } from "lib";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Header, Title } from "../../components";
import { Action, favors as data } from "../../lib/data";

interface GetServerSidePropsReturn {
  props: {
    action: Action;
  };
}

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ActionContent = styled(Container)`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const Description = styled.div``;
const Organization = styled.div``;
const Subtitle = styled.h2`
  text-transform: initial;
  font-family: barlow, sans-serif;
`;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;
  const action = data.favors.find((favor) => favor.id == actionId);
  return {
    props: {
      action,
    }, // will be passed to the page component as props
  };
};

const Divider = styled.div`
  margin-bottom: 6em;
`;

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ action }) => {
  const router = useRouter();

  return (
    <Layout
      headProps={{
        title: `${toPascalCase(action.title)}`,
      }}
    >
      <Header title="Nuestras acciones" />
      <Main>
        {/* <Breadcrumb>
          {router.asPath.split("/").map((link, k) => (
            <Link key={k} href={k === 0 ? "/" : link}>
              {k === 0 ? "FavForMe" : link}
            </Link>
          ))}
        </Breadcrumb> */}
        <Title>{action.title}</Title>
        {/* <Subtitle>{action.description}</Subtitle> */}
        <ActionContent>
          <Description>
            <p>{action.description}</p>
            <p>
              {action.peopleBeneficted &&
                `Gente beneficiada: ${action.peopleBeneficted} personas`}
            </p>
          </Description>
          <Organization>
            <h2>Datos de la ONG</h2>
            <p>{action.history}</p>
          </Organization>
        </ActionContent>
        <Divider />
      </Main>
    </Layout>
  );
};

export default ActionPage;
