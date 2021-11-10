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
import {
  DonationUnavailableModal,
  ShareActionModal,
} from "@/components/Modal/components";
import { FunctionComponent, useContext } from "react";
import { faHeart, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { ActionI } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ModalContext } from "@/lib/context";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { SocialNetworks } from "@/components";
import { getODSImage } from "@/lib/ods_image";
import { isNotProd } from "@/utils";
import { makeCalculations } from "@/service";
import { useRouter } from "next/router";
import { toPascalCase } from "@/lib";

interface ActionProps {
  carousel?: boolean;
  data: ActionI | null;
}

const ActionCard: FunctionComponent<ActionProps> = ({ carousel, data }) => {
  const router = useRouter();
  const { completition, dueDate, currentAmount, finalAmount } =
    makeCalculations(data);
  const { handleModal } = useContext(ModalContext);

  const actionUrl = `/acciones/${data?.id}`;
  const goToAction = () => router.push(actionUrl);

  return (
    <Container carousel={carousel}>
      <ImageContainer>
        <DueDate show={!!dueDate} urgency={dueDate?.urgency}>
          {dueDate?.date}
        </DueDate>
        <a href="#" onClick={goToAction}>
          <Image
            layout="fill"
            objectFit="contain"
            alt="Imagen representativa de la acción"
            src={data?.mainImage ?? "/images/accion_placeholder_1.jpg"}
          />
        </a>
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
          <Link passHref href={actionUrl}>
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
            color="secondary"
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
            DON&Aacute; <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button color="gray" hoverColor="#cccccc" onClick={goToAction}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Button>
          <Button
            hoverColor="primary"
            onClick={() =>
              handleModal(
                <ShareActionModal
                  text={`¡${toPascalCase(
                    data?.organization.name
                  )} te necesita con ${toPascalCase(data?.title)}! 👉`}
                  url={`${router.basePath}${actionUrl}`}
                />
              )
            }
          >
            <FontAwesomeIcon icon={faShareSquare} />
          </Button>
        </ButtonContainer>
        {/* <SocialNetworks data={data?.organization?.socialNetworks} /> */}
      </MainContent>
    </Container>
  );
};

export { ActionCard as Action };
