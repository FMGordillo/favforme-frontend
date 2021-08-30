import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
} from "@/components/ActionCard/styles"; // TODO: Mejorar esto
import { Button, SocialNetworks } from "@/components";
import { ActionI } from "@/lib/types";
import { FunctionComponent } from "react";
import { Summary } from "./styles";
import { UseCalculationsReturn } from "@/service";
import { useRouter } from "next/router";

interface ActionCardProps {
  amounts: UseCalculationsReturn | null;
  queryId: string | null;
  canDonate?: boolean;
  action: ActionI | null;
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
          ${amounts?.currentAmount}
          .-
        </AmountCollected>
        <AmountSubtitle>
          recaudado para esta acción
          <br />
          de ${amounts?.finalAmount}.-
        </AmountSubtitle>
        <Percentage>{amounts?.completition}% COMPLETADO</Percentage>
        <Button
          hoverTextColor="black"
          onClick={() =>
            router.push({
              pathname: "/donacion",
              query: {
                action: queryId,
              },
            })
          }
        >
          Favorecer esta acci&oacute;n
        </Button>
        <SocialNetworks
          data={action?.organization?.socialNetworks ?? []}
          justify="center"
        />
      </Summary>
    </>
  );
};
