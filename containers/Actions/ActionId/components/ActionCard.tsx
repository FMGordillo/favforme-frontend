import {
  AmountCollected,
  AmountSubtitle,
  Percentage,
  Summary,
  WrapperSocialNetworks,
} from "./styles";
import { Button, SocialNetworks } from "@/components";
import { ActionI } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { UseCalculationsReturn } from "@/service";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
        <h2>Total hoy</h2>
        <AmountCollected>
          ${amounts?.currentAmount}
          .-
        </AmountCollected>
        <AmountSubtitle>
          Recaudado para esta acción
          <br />
          de <b>${amounts?.finalAmount}.-</b>
        </AmountSubtitle>
        <Percentage>{amounts?.completition}% COMPLETADO</Percentage>
        <Button
          color="white"
          textColor="primary"
          onClick={() =>
            router.push({
              pathname: "/donacion",
              query: {
                action: queryId,
              },
            })
          }
        >
          <FontAwesomeIcon icon={faHeart} /> Donar
        </Button>
        <WrapperSocialNetworks>
          <SocialNetworks
            data={action?.organization?.socialNetworks ?? []}
            justify="center"
          />
        </WrapperSocialNetworks>
      </Summary>
    </>
  );
};
