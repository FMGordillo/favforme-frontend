import { SocialNetworks } from "@/components";
import { parseToCurrency } from "@/lib/data";
import { ActionI } from "@/lib/types";
import {
  AmountCollected,
  AmountSubtitle,
  Button,
  ButtonContainer,
  Container,
  MainContent,
  Percentage,
  ProgressBar,
  Title,
  TitleContainer,
} from "@/components/ActionCard/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface ActionProps {
  data?: ActionI;
}

const ActionCard: FunctionComponent<ActionProps> = ({ data }) => {
  const router = useRouter();
  const currentAmount = data?.current;
  const finalAmount = data?.objective;

  return (
    <Container>
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
            <Title>{data?.title.toUpperCase()}</Title>
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
        <ButtonContainer>
          <Button
            onClick={() =>
              router.push({
                pathname: "/donacion",
                query: {
                  action: data?.id,
                },
              })
            }
          >
            DONAR
          </Button>
          <Button
            color="gray"
            hoverVariant="dark"
            onClick={() => router.push(`/acciones/${data?.id}`)}
          >
            DETALLES
          </Button>
        </ButtonContainer>
        <SocialNetworks data={data?.organization?.socialNetworks} />
      </MainContent>
    </Container>
  );
};

export { ActionCard as Action };
