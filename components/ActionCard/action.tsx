import { SocialNetworks } from "@/components";
import {
  AmountCollected,
  AmountSubtitle,
  Button,
  ButtonContainer,
  Container,
  DueDate,
  ImageContainer,
  MainContent,
  Percentage,
  ProgressBar,
  Title,
  ODS,
} from "./styles";
import { parseToCurrency } from "@/lib/data";
import { ActionI } from "@/lib/types";
import { formatDistance, differenceInDays } from "date-fns";
import esES from "date-fns/locale/es";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { getODSImage } from "@/lib/ods_image";

interface ActionProps {
  data?: ActionI;
}

const ActionCard: FunctionComponent<ActionProps> = ({ data }) => {
  const router = useRouter();
  const currentAmount = data?.current;
  const finalAmount = data?.objective;

  /**
   * TODO: Unificar de alguna forma ambas funciones
   */
  const calculateDueDate = (
    createdAt?: string,
    endDate?: string
  ): string | undefined => {
    try {
      if (createdAt && endDate) {
        return formatDistance(new Date(endDate), new Date(createdAt), {
          locale: esES,
        });
      } else {
        throw "No endDate was provided, cannot calculate";
      }
    } catch (error) {
      console.error("calculateDueDate", error);
    }
  };

  /**
   * TODO: Unificar de alguna forma ambas funciones
   */
  const calculateDueImportance = (
    createdAt?: string,
    endDate?: string
  ): number | undefined => {
    try {
      if (createdAt && endDate) {
        return differenceInDays(new Date(endDate), new Date(createdAt));
      } else {
        throw "No endDate was provided, cannot calculate";
      }
    } catch (error) {
      console.error("calculateDueImportance", error);
    }
  };

  const daysUntilFinished = calculateDueImportance(
    data?.createdAt,
    data?.closedAt
  );

  const urgency = daysUntilFinished
    ? daysUntilFinished < 21 && daysUntilFinished > 14
      ? "medium"
      : daysUntilFinished <= 14
      ? "high"
      : "meh"
    : "meh";

  return (
    <Container>
      <ImageContainer>
        <DueDate urgency={urgency}>
          {calculateDueDate(data?.createdAt, data?.closedAt)}
        </DueDate>
        <Image
          width={1400}
          height={1100}
          layout="responsive"
          alt="Imagen representativa de la acción"
          src={data?.mainImage ?? "/images/accion_placeholder_1.jpg"}
        />
        <ODS>
          <Image src="/images/ODS_logo_full.png" width={90} height={75} />
          {data?.ods.map((odsImg) => {
            const src = getODSImage(odsImg);
            return <Image key={src} src={src} width={90} height={85} />;
          })}
        </ODS>
      </ImageContainer>
      {/* </Link> */}
      <MainContent>
        <div>
          <Link href={`/acciones/${data?.id}`}>
            <Title
              color={
                urgency === "high"
                  ? "red"
                  : urgency === "medium"
                  ? "yellow"
                  : "inherit"
              }
            >
              {data?.title.toUpperCase()}
            </Title>
          </Link>
        </div>
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
            textColor="black"
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
