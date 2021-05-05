import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button } from "@/components";
import { Title } from "@/components/styles";
import { Section, StyledContainer, StyledTitle, StyledText } from "./styles";

interface CallToActionSectionProps {
  toggleModal?: () => void;
}

const CallToActionSection: FunctionComponent<CallToActionSectionProps> = ({}) => {
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
            Sumá donaciones a favor de una acción social y compartilo en tu
            comunidad para conseguir más apoyo.
          </StyledText>
        </Section>
        <Section>
          <Image
            src="/images/image-2.svg"
            alt="Persona en sofa"
            width={300}
            height={250}
          />
          <Title>PARA EMPRESAS</Title>
          <StyledText>
            Podés generar Responsabilidad Social Empresarial y fomentar las
            acciones de impacto social positivo con tus stakeholders.
          </StyledText>
        </Section>
        <Section>
          <Image
            src="/images/image-3.svg"
            alt="Personas amigables"
            width={300}
            height={250}
          />
          <Title>Para ONG&apos;s</Title>
          <StyledText>
            Conseguí fondos para tus proyectos y lográ que más personas se sumen
            a tu causa.
          </StyledText>
        </Section>
      </StyledContainer>
    </>
  );
};

export { CallToActionSection };
