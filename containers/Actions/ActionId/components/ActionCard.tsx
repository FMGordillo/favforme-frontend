import { ActionI } from "@/lib/types";
import { FunctionComponent } from "react";
import { Button, SocialNetworks } from "@/components";
import { Summary } from "./styles";
import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
} from "@/components/Action/styles"; // TODO: Mejorar esto
import { useRouter } from "next/router";

interface ActionCardProps {
  amounts: any; // TODO: Mejorar esto
  queryId: string;
  action: ActionI | undefined;
}
export const ActionCard: FunctionComponent<ActionCardProps> = ({
  amounts,
  queryId,
  action,
}) => {
  const router = useRouter();
  return (
    <>
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
                action: queryId,
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
    </>
  );
};
