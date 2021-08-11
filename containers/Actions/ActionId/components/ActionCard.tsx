import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
} from "@/components/ActionCard/styles"; // TODO: Mejorar esto
import { Button, SocialNetworks } from "@/components";
import { FunctionComponent, useContext } from "react";
import { ActionI } from "@/lib/types";
import { DonationUnavailableModal } from "@/components/Modal/components";
import { ModalContext } from "@/lib/context";
import { Summary } from "./styles";
import { UseCalculationsReturn } from "@/service";
import { useRouter } from "next/router";

interface ActionCardProps {
  amounts: UseCalculationsReturn | null;
  queryId: string;
  canDonate?: boolean;
  action: ActionI | null;
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
