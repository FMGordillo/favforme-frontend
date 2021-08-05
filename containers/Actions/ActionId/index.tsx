import {
  ActionContent,
  ActionTitle,
  Container,
  LeftColumn,
  RightColumn,
} from "./styles";
import { Divider, Layout, ProposeMyONG, Title } from "@/components";
import { Action } from "@/lib/types";
import { ActionCard } from "./components";
import { DonatorsTable } from "@/components/DonatorsTable";
import Image from "next/image";
import { NextPage } from "next";
import { isNotProd } from "@/utils";
import { toPascalCase } from "@/lib";
import { useCalculations } from "@/hooks";

interface ActionProps {
  action: Action | null;
  query: {
    id: string | undefined;
  };
}

export const ActionPage: NextPage<ActionProps> = ({ query, action }) => {
  const amounts = useCalculations(action);

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
