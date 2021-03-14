import { SocialNetworks } from "@/components";
import { Button } from "@/components/Button"; // FIXME: BuG!
import { parseToCurrency } from "@/lib/data";
import { ActionI } from "@/lib/types";
import {
  AmountCollected,
  AmountSubtitle,
  MainContent,
  Percentage,
  ProgressBar,
  StyledTitle,
  TitleContainer,
} from "@/components/Action/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface ActionProps {
  data?: ActionI;
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

const Action: FunctionComponent<ActionProps> = ({ data }) => {
  const router = useRouter();
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
        <StyledButton
          onClick={() =>
            router.push({
              pathname: "/donacion",
              query: {
                action: data?.id,
              },
            })
          }
        >
          Favorecer esta acción
        </StyledButton>
        <SocialNetworks data={data?.organization?.socialNetworks} />
      </MainContent>
    </StyledContainer>
  );
};

export { Action };
