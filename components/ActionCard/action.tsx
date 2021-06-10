import { SocialNetworks } from "@/components";
import { DonationUnavailableModal } from "@/components/Modal/components";
import { useCalculations } from "@/hooks";
import { ModalContext } from "@/lib/context";
import { getODSImage } from "@/lib/ods_image";
import { ActionI } from "@/lib/types";
import { isNotProd } from "@/utils";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

interface ActionProps {
  carousel?: boolean;
  data?: ActionI;
}

const ActionCard: FunctionComponent<ActionProps> = ({ carousel, data }) => {
  const router = useRouter();
  const { completition, dueDate, currentAmount, finalAmount } = useCalculations(
    data
  );
  const { handleModal } = useContext(ModalContext);

  const actionUrl = `/acciones/${data?.id}`;
  const goToAction = () => router.push(actionUrl);

  return (
    <Container carousel={carousel}>
      <ImageContainer>
        <DueDate show={!!data?.closedAt} urgency={dueDate?.urgency}>
          {dueDate?.date}
        </DueDate>
        <Link href={actionUrl}>
          <Image
            className="action"
            width={1400}
            height={1100}
            layout="intrinsic"
            alt="Imagen representativa de la acción"
            src={data?.mainImage ?? "/images/accion_placeholder_1.jpg"}
          />
        </Link>
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
          <Link href={actionUrl}>
            <Title
              color={
                dueDate?.urgency === "high"
                  ? "red"
                  : dueDate?.urgency === "medium"
                  ? "yellow"
                  : "inherit"
              }
            >
              {data?.title.toUpperCase()}
            </Title>
          </Link>
        </div>
        <AmountCollected>
          ${currentAmount}
          .-
        </AmountCollected>
        <AmountSubtitle>
          recaudado de <b>${finalAmount}</b>
        </AmountSubtitle>
        <ProgressBar>
          <progress max="100" value={completition}></progress>
        </ProgressBar>
        <Percentage>{completition}%</Percentage>
        <ButtonContainer>
          <Button
            hoverTextColor="black"
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
            DONAR <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button
            color="gray"
            textColor="black"
            hoverVariant="dark"
            hoverTextColor="white"
            onClick={goToAction}
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
