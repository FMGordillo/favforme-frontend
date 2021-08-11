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
import { FunctionComponent, useContext } from "react";
import { ActionI } from "@/lib/types";
import { DonationUnavailableModal } from "@/components/Modal/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ModalContext } from "@/lib/context";
import { SocialNetworks } from "@/components";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { getODSImage } from "@/lib/ods_image";
import { isNotProd } from "@/utils";
import { makeCalculations } from "@/service";
import { useRouter } from "next/router";

interface ActionProps {
  carousel?: boolean;
  data: ActionI | null;
}

const ActionCard: FunctionComponent<ActionProps> = ({ carousel, data }) => {
  const router = useRouter();
  const {
    completition,
    dueDate,
    currentAmount,
    finalAmount,
  } = makeCalculations(data);
  const { handleModal } = useContext(ModalContext);

  const actionUrl = `/acciones/${data?.id}`;
  const goToAction = () => router.push(actionUrl);

  return (
    <Container carousel={carousel}>
      <ImageContainer>
        <DueDate show={!!dueDate} urgency={dueDate?.urgency}>
          {dueDate?.date}
        </DueDate>
        <Image
          layout="fill"
          objectFit="contain"
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
          <progress max="100" value={10}></progress>
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
