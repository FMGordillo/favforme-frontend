import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button, Title } from "../../styles";
import { Section, StyledContainer, StyledTitle, StyledText } from "./styles";

interface CallToActionSectionProps {
  toggleModal?: () => void;
}

const CallToActionSection: FunctionComponent<CallToActionSectionProps> = ({
  toggleModal,
}) => {
  return (
    <>
      <StyledTitle>ENTORNO FAVORABLE</StyledTitle>
      <StyledContainer id="call_to_actions">
        <Section>
          <Image
            src="/images/image-1.svg"
            alt="Personas en conjunto celebrando"
            width={300}
            height={250}
          />
          <Title>JUNTOS ES MEJOR</Title>
          <StyledText>
            Creamos un entorno sostenible para que las ONGs puedan conseguir los
            recursos necesarios y lograr sus objetivos gracias a la ayuda de tu
            Empresa.
          </StyledText>
          <Button>Acerca de FavForMe</Button>
        </Section>
        <Section>
          <Image
            src="/images/image-2.svg"
            alt="Persona en sofa"
            width={300}
            height={250}
          />
          <Title>AYUDÁ DONDE PREFIERAS</Title>
          <StyledText>
            Te mostramos todos las causas activas y vos elegís las que más te
            identifiquen. Tu aporte lo hacés de forma simple y clara, la
            oportunidad es ahora.
          </StyledText>
          <Link href="/acciones">
            <Button>Ver acciones</Button>
          </Link>
        </Section>
        <Section>
          <Image
            src="/images/image-3.svg"
            alt="Personas amigables"
            width={300}
            height={250}
          />
          <Title>INVERTÍ EN TRANQUILIDAD</Title>
          <StyledText>
            Los recursos de R.S.E. que destines, serán tan transparentes como
            nosotros. Informes y Certificados del impacto generado. Ayudá con
            total confianza.
          </StyledText>
          <Button>Ver ejemplos</Button>
        </Section>
      </StyledContainer>
    </>
  );
};

export { CallToActionSection };
