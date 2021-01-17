import { Action } from "lib/types";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { parseToCurrency } from "../../../lib/data";
import { Button } from "../../styles";
import { SocialNetworks } from "./SocialNetworks";
import {
  AmountCollected,
  AmountSubtitle,
  MainContent,
  Percentage,
  ProgressBar,
  StyledTitle,
  TitleContainer,
} from "./styles";

interface ActionProps {
  data?: Action;
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 2em;
  box-shadow: 1em 1em #dcdcdc;
  background: ${({ theme }) => theme.palette.common?.gray?.light};
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

const StyledButton = styled(Button)`
  margin: 1em 0;
`;

const ActionComponent: FunctionComponent<ActionProps> = ({ data }) => {
  const currentAmount = data?.current;
  const finalAmount = data?.objective;

  return (
    <StyledContainer>
      <Link href={`/acciones/${data?.id}`}>
        <div>
          <Image
            src="/images/accion_placeholder_1.jpg"
            layout="responsive"
            width={1400}
            height={1100}
          />
        </div>
      </Link>
      <MainContent>
        <TitleContainer>
          <Link href={`/acciones/${data?.id}`}>
            <StyledTitle>{data?.title.toUpperCase()}</StyledTitle>
          </Link>
        </TitleContainer>
        <AmountCollected>
          ${parseToCurrency(currentAmount)}
          .-
        </AmountCollected>
        <AmountSubtitle>
          aportando voluntariamente de ${parseToCurrency(finalAmount)}
        </AmountSubtitle>
        {/* TODO: FIX THIS */}
        <ProgressBar>
          <progress
            max="100"
            value={(
              ((currentAmount || 0) * 100) /
              (finalAmount || currentAmount || 0)
            ).toFixed()}
          ></progress>
        </ProgressBar>
        <Percentage>
          {(
            ((currentAmount || 0) * 100) /
            (finalAmount || currentAmount || 0)
          ).toFixed()}
          %
        </Percentage>
        <StyledButton>Favorecer esta acción</StyledButton>
        <SocialNetworks data={data?.organization?.socialNetworks} />
      </MainContent>
    </StyledContainer>
  );
};

export { ActionComponent };
