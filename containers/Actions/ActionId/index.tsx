import { Button, Divider, Layout, SocialNetworks, Title } from "@/components";
import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
} from "@/components/Action/styles";
import { toPascalCase } from "@/lib";
import { ActionI } from "@/lib/types";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ActionContent,
  JoinUsContainer,
  LeftColumn,
  Main,
  RightColumn,
  Summary,
} from "./styles";

interface ActionProps {
  amounts: any;
  action: ActionI | undefined;
  query: {
    id: string;
  };
}

export const ActionPage: NextPage<ActionProps> = ({
  query,
  amounts,
  action,
}) => {
  const router = useRouter();

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
