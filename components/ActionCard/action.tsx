import { SocialNetworks } from "@/components";
import { ModalContext } from "@/lib/context";
import { parseToCurrency } from "@/lib/data";
import { getODSImage } from "@/lib/ods_image";
import { ActionI } from "@/lib/types";
import { isNotProd } from "@/utils";
import { differenceInDays, formatDistance } from "date-fns";
import esES from "date-fns/locale/es";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useContext } from "react";
import {
  AmountCollected,
  AmountSubtitle,
  Button,
  ButtonContainer,
  Container,
  DueDate,
  ImageContainer,
  MainContent,
  ODS,
  Percentage,
  ProgressBar,
  Title,
} from "./styles";
import { DonationUnavailableModal } from "@/components/Modal/components";

interface ActionProps {
  carousel?: boolean;
  data?: ActionI;
}

const ActionCard: FunctionComponent<ActionProps> = ({ carousel, data }) => {
  const router = useRouter();
  const { handleModal } = useContext(ModalContext);
  const currentAmount = Number(data?.current);
  const finalAmount = Number(data?.objective);

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
        console.log("No endDate was provided, cannot calculate");
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
        console.log("No endDate was provided, cannot calculate");
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
    <Container carousel={carousel}>
      <ImageContainer>
        <DueDate show={!!data?.closedAt} urgency={urgency}>
          {calculateDueDate(data?.createdAt, data?.closedAt)}
        </DueDate>
        <Image
          width={1400}
          height={1100}
          layout="intrinsic"
          alt="Imagen representativa de la acción"
          src={data?.mainImage ?? "/images/accion_placeholder_1.jpg"}
        />
        <ODS>
          <Image src="/images/ODS_logo_full.webp" width={90} height={75} />
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
          recaudado de <b>${parseToCurrency(finalAmount)}</b>
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
              isNotProd
                ? router.push({
                    pathname: "/donacion",
                    query: {
                      action: data?.id,
                    },
                  })
                : handleModal(<DonationUnavailableModal />)
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
