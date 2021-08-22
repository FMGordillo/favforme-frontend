import { Title } from "@/components";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Section, StyledContainer, StyledText } from "./styles";

interface CallToActionSectionProps {
  toggleModal?: () => void;
}

const CallToActionSection: FunctionComponent<CallToActionSectionProps> = ({}) => {
  return (
    <>
      <StyledContainer id="call_to_actions">
        <Section>
          <Image
            src="/images/image-1.svg"
            alt="Mujer de traje de oficina en cima de una montaña sonriendo con una capa"
            width={300}
            height={250}
          />
          <Title>SOS PERSONA</Title>
          <StyledText>
            Doná en las acciones para que muchas personas tengan la oportunidad
            y logren alcanzar sus sueños. <br />
            ...<i>&quot;Hoy te convertís en héroe&quot;</i>...
          </StyledText>
        </Section>
        <Section>
          <Image
            src="/images/image-3.svg"
            alt="Persona tomando un cafe"
            width={300}
            height={250}
          />
          <Title>SOS EMPRESA</Title>
          <StyledText>
            Generá Responsabilidad Social Empresarial y fomentá las acciones de
            impacto social positivo con tus stakeholders
          </StyledText>
        </Section>
        <Section>
          <Image
            src="/images/image-2.svg"
            alt="Persona dando de comer a otra persona"
            width={300}
            height={250}
          />
          <Title>SOS ONG</Title>
          <StyledText>
            Conseguí fondos para cumplir con tus objetivos, logrando que más
            personas apoyen a la causa. Contanos tu historia
          </StyledText>
        </Section>
      </StyledContainer>
    </>
  );
};

export { CallToActionSection };
