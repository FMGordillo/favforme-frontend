import { Button, Divider, Layout, Title } from "@/components";
import { DonatorsTable } from "@/components/DonatorsTable";
import { toPascalCase } from "@/lib";
import { ActionI } from "@/lib/types";
import { isNotProd } from "@/utils";
import { NextPage } from "next";
import Image from "next/image";
import { ActionCard } from "./components";
import {
  ActionContent,
  ActionTitle,
  Container,
  JoinUsContainer,
  LeftColumn,
  RightColumn,
} from "./styles";

interface ActionProps {
  amounts: any;
  loading: boolean;
  action: ActionI | undefined;
  query: {
    id: string;
  };
}

export const ActionPage: NextPage<ActionProps> = ({
  query,
  action,
  amounts,
}) => {
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
      <Container>
        <Title>Donaciones recibidas</Title>
        <DonatorsTable actionId={action?.id} />
        <ActionContent>
          <ActionTitle>{action?.title}</ActionTitle>
          <LeftColumn>
            <div>
              <Image
                src={action?.mainImage || "/images/accion_placeholder_1.jpg"}
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
            <ActionCard
              action={action}
              queryId={query?.id}
              amounts={amounts}
              canDonate={isNotProd}
            />
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
      </Container>
    </Layout>
  );
};

export default ActionPage;
