import { ActionI } from "@/lib/types";
import { FunctionComponent, useContext } from "react";
import { Button, SocialNetworks } from "@/components";
import { Summary } from "./styles";
import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
} from "@/components/ActionCard/styles"; // TODO: Mejorar esto
import { useRouter } from "next/router";
import { ModalContext } from "@/lib/context";
import { DonationUnavailableModal } from "@/components/Modal/components";
import { UseCalculationsReturn } from "@/hooks";

interface ActionCardProps {
  amounts: UseCalculationsReturn;
  queryId: string;
  canDonate?: boolean;
  action: ActionI | undefined;
}
export const ActionCard: FunctionComponent<ActionCardProps> = ({
  amounts,
  queryId,
  action,
  canDonate,
}) => {
  const { handleModal } = useContext(ModalContext);
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
          hoverTextColor="black"
          onClick={() =>
            canDonate
              ? router.push({
                  pathname: "/donacion",
                  query: {
                    action: queryId,
                  },
                })
              : handleModal(<DonationUnavailableModal />)
          }
        >
          Favorecer esta acci&oacute;n
        </Button>
        <SocialNetworks
          data={action?.organization?.socialNetworks}
          justify="center"
        />
      </Summary>
    </>
  );
};
