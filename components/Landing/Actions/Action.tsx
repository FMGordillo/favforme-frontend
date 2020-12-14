import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Action as ActionI, parseToCurrency } from "../../../lib/data";
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
  data?: ActionI;
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  grid-gap: 2em;
  box-shadow: 1em 1em #dcdcdc;
  background: ${({ theme }) => theme.color.gray.light};
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

const StyledButton = styled(Button)`
  margin: 1em 0;
`;

const Action: FunctionComponent<ActionProps> = ({ data }) => {
  const currentAmount = data?.objective?.current.amount;
  const finalAmount = data?.objective?.final.amount;

  return (
    <StyledContainer>
      <Link href={`/acciones/${data?.id}`}>
        <div>
          <Image
            src={data?.imageSrc || ""}
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
        <SocialNetworks data={data?.socialNetworks} />
      </MainContent>
    </StyledContainer>
  );
};

export { Action };
