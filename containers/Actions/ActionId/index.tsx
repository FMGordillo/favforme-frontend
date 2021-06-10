import { ButtonLink, Divider, Layout, Title } from "@/components";
import { DonatorsTable } from "@/components/DonatorsTable";
import { toPascalCase } from "@/lib";
import { event } from "@/lib/gtag";
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
        <ActionContent>
          <ActionTitle>{action?.title}</ActionTitle>
          <LeftColumn>
            <div>
              <Image
                src={action?.mainImage || "/images/accion_placeholder_1.jpg"}
                layout="intrinsic"
                alt="Resumen"
                width={600}
                height={359}
              />
            </div>
            <p>{action?.description}</p>
            <p>
              {action?.peopleBeneficted &&
                `Gente beneficiada: ${action.peopleBeneficted} personas`}
            </p>
          </LeftColumn>
          <RightColumn>
            <h2>Total hoy</h2>
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
        <Title>Donaciones recibidas</Title>
        <DonatorsTable actionId={action?.id} />
        <JoinUsContainer>
          <Title color="secondary" weight="bold">
            ¿Tenés una ONG?
          </Title>
          <p>
            Si sos una ONG es hora de potenciar tu esfuerzo con FavForMe.
            <br />
            Hagamos juntos un lugar mejor para vivir.
          </p>
          <ButtonLink
            onClick={() =>
              event({ action: "sumar_mi_ong", category: "ong", value: 1 })
            }
            href="https://forms.gle/JTa4Uf5EnRzY1NG4A"
            target="_blank"
            rel="noreferrer noopener"
            color="secondary"
            hoverTextColor="black"
          >
            Sumar mi ONG
          </ButtonLink>
        </JoinUsContainer>
        <Divider />
      </Container>
    </Layout>
  );
};

export default ActionPage;
