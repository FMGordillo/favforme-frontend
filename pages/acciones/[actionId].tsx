import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Divider, Layout, Title } from "../../components";
import { SocialNetworks } from "../../components/LandingSections";
import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
} from "../../components/LandingSections/Actions/styles";
import {
  ActionContent,
  JoinUsContainer,
  LeftColumn,
  Main,
  RightColumn,
  Summary,
} from "../../components/Pages/actionId";
import { toPascalCase } from "../../lib";
import { useAction } from "../../hooks";

interface GetServerSidePropsReturn {
  props: {
    query: any;
  };
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> => {
  const { actionId } = context.query;
  return {
    props: {
      query: { id: actionId },
    }, // will be passed to the page component as props
  };
};

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ query }) => {
  const router = useRouter();
  const { data, amounts } = useAction({ query });
  const { action } = data || {};

  return (
    <Layout
      header
      headerProps={{
        title: "Nuestras acciones",
      }}
      headProps={{
        title: `${toPascalCase(action?.title)}`,
      }}
    >
      <Main>
        <Title>{action?.title}</Title>
        <ActionContent>
          <LeftColumn>
            <div>
              <Image
                src={"/images/accion_placeholder_1.jpg" || "/"}
                alt="Resumen"
                width={510}
                height={350}
              />
            </div>
            <p>{action?.description}</p>
            <p>
              {action?.peopleBeneficted &&
                `Gente beneficiada: ${action.peopleBeneficted} personas`}
            </p>
          </LeftColumn>
          <RightColumn>
            <Summary>
              <AmountCollected>
                ${amounts.currentAmount}
                .-
              </AmountCollected>
              <AmountSubtitle>
                recaudado para esta acción
                <br />
                de ${amounts.finalAmount}.-
              </AmountSubtitle>
              <Percentage>{amounts.completition}% COMPLETADO</Percentage>
              <Button
                onClick={() =>
                  router.push({
                    pathname: "/donacion",
                    query: {
                      action: query?.id,
                    },
                  })
                }
              >
                Favorecer esta acción
              </Button>
              <SocialNetworks
                data={action?.organization?.socialNetworks}
                justify="center"
              />
            </Summary>
            <h2>Datos de la ONG</h2>
            <Image
              src={action?.organization?.logo || "/"}
              alt="Logo"
              width={150}
              height={150}
            />
            <p>{action?.organization?.history}</p>
          </RightColumn>
        </ActionContent>
        <JoinUsContainer>
          <Title color="secondary" weight="bold">
            ¿Tenés una ONG?
          </Title>
          <p>
            Si sos una ONG es hora de potenciar tu esfuerzo con FavForMe.
            <br />
            Hagamos juntos un lugar mejor para vivir.
          </p>
          <Button color="secondary">Sumar mi ONG</Button>
        </JoinUsContainer>
        <Divider />
      </Main>
    </Layout>
  );
};

export default ActionPage;
