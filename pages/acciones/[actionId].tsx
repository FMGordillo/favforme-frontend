import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, LayoutComponent as Layout } from "components";
import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
  SocialNetworks,
} from "components/Landing/Actions/styles";
import { toPascalCase } from "lib";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Image from "next/image";
import styled from "styled-components";
import { Divider, Header, Title } from "../../components";
import { Action, favors as data, parseToCurrency } from "../../lib/data";

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
  grid-gap: 2em;
  grid-template-columns: 3fr 1fr;
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;
const Summary = styled.div`
  display: grid;
  grid-gap: 1em;
`;
const LeftColumn = styled.div`
  div:first-child {
    text-align: center;
  }
`;
const RightColumn = styled.div``;

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

const ActionPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ action }) => {
  const currentAmount = action.objective.current.amount;
  const finalAmount = action.objective.final.amount;
  // const router = useRouter();

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
        <ActionContent>
          <LeftColumn>
            <div>
              <Image
                src={action.imageSrc || "/"}
                alt="Resumen"
                width={510}
                height={350}
              />
            </div>
            <p>{action.description}</p>
            <p>
              {action.peopleBeneficted &&
                `Gente beneficiada: ${action.peopleBeneficted} personas`}
            </p>
          </LeftColumn>
          <RightColumn>
            <Summary>
              <AmountCollected>
                ${parseToCurrency(currentAmount)}
                .-
              </AmountCollected>
              <AmountSubtitle>
                recaudado para esta acción
                <br />
                de ${parseToCurrency(finalAmount)}.-
              </AmountSubtitle>
              <Percentage>
                {((currentAmount * 100) / finalAmount).toFixed()}% COMPLETADO
              </Percentage>
              <Button>Favorecer esta acción</Button>
              <SocialNetworks justify="center">
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </SocialNetworks>
            </Summary>
            <h2>Datos de la ONG</h2>
            <Image
              src={action.logo || "/"}
              alt="Logo"
              width={150}
              height={150}
            />
            <p>{action.history}</p>
          </RightColumn>
        </ActionContent>
        <Title>¿Tenés una ONG?</Title>
        <p>
          Si sos una ONG es hora de potenciar tu esfuerzo con FavForMe.
          <br />
          Hagamos juntos un lugar mejor para vivir.
        </p>
        <Button color="secondary">Sumar mi ONG</Button>
        <Divider />
      </Main>
    </Layout>
  );
};

export default ActionPage;
