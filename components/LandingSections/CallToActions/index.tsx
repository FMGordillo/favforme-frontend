import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button, Title } from "../../styles";
import { Section, StyledContainer, StyledText } from "./styles";

interface CallToActionSectionProps {
  toggleModal?: () => void;
}

const CallToActionSection: FunctionComponent<CallToActionSectionProps> = ({
  toggleModal,
}) => {
  return (
    <StyledContainer id="call_to_actions">
      <Section>
        <Image
          src="/images/image-1.png"
          alt="Personas en conjunto celebrando"
          width={300}
          height={250}
        />
        <Title>DONDE PODÉS AYUDAR</Title>
        <StyledText>
          Te mostramos todos los proyectos activos y vos elegis las acciones que
          más te identifiquen. Tu aporte lo realizás de forma simple y clara, la
          oportunidad es ahora.
        </StyledText>
        <Link href="/acciones">
          <Button>Ver acciones</Button>
        </Link>
      </Section>
      <Section>
        <Image
          src="/images/image-2.png"
          alt="Persona en sofa"
          width={300}
          height={250}
        />
        <Title>INVERTÍ EN CONFIANZA</Title>
        <StyledText>
          Los recursos R.S.E. que destines serán tan transparentes como
          nosotros. Te enviaremos informes del impacto generado. Ayudá con total
          tranquilidad.
        </StyledText>
        <Button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1x2eH3g7qWA9jGfFUYZSkTm1lL_U1RlIT/view?usp=sharing"
          >
            Ver informes
          </a>
        </Button>
      </Section>
      <Section>
        <Image
          src="/images/image-3.png"
          alt="Personas amigables"
          width={300}
          height={250}
        />
        <Title>SOMOS AMIGABLES</Title>
        <StyledText>
          Contamos con un equipo dedicado para acompañarte en el proceso y
          atender cualquier inquietud que tengas acerca de nuestro desarrollo,
          contactanos.
        </StyledText>
        <Button onClick={toggleModal}>Contactar</Button>
      </Section>
    </StyledContainer>
  );
};

export { CallToActionSection };
