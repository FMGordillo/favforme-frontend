import {
  ActionContent,
  ActionTitle,
  Container,
  LeftColumn,
  RightColumn,
} from "./styles";
import { Divider, Layout, ProposeMyONG, Title } from "@/components";
import { ActionCard } from "./components";
import { ActionI } from "@/lib/types";
import { DonatorsTable } from "@/components/DonatorsTable";
import Image from "next/image";
import { NextPage } from "next";
import { UseCalculationsReturn } from "@/service";
import { isNotProd } from "@/utils";
import { toPascalCase } from "@/lib";

interface ActionProps {
  amounts: UseCalculationsReturn | null;
  action: ActionI | null;
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
        <ProposeMyONG />
        <Divider />
      </Container>
    </Layout>
  );
};

export default ActionPage;
