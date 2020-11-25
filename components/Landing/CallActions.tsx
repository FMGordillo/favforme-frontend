import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button, Text, Title } from "./styles";
const Container = styled.section`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(1)}em;
  margin: 0 ${({ theme }) => theme.spacing(2)}em;
  grid-template-columns: 1fr 1fr 1fr;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    margin: 0 ${({ theme }) => theme.spacing(1)}em;
  }
`;

const Section = styled.section`
  text-align: center;
  display: grid;
  justify-items: center;
`;

const CallActions: FunctionComponent = () => {
  return (
    <Container>
      <Section>
        <Image
          src="/images/image-1.png"
          alt="Personas en conjunto celebrando"
          width={300}
          height={250}
        />
        <Title>DONDE PODÉS AYUDAR</Title>
        <Text>
          Te mostramos todos los proyectos activos y vos elegis las acciones que
          más te identifiquen. Tu aporte lo realizás de forma simple y clara, la
          oportunidad es ahora.
        </Text>
        <Button>Ver acciones</Button>
      </Section>
      <Section>
        <Image
          src="/images/image-2.png"
          alt="Persona en sofa"
          width={300}
          height={250}
        />
        <Title>INVERTÍ EN CONFIANZA</Title>
        <Text>
          Los recursos R.S.E. que destines serán tan transparentes como
          nosotros. Te enviaremos informes del impacto generado. Ayudá con total
          tranquilidad.
        </Text>
        <Button>Favorecer</Button>
      </Section>
      <Section>
        <Image
          src="/images/image-3.png"
          alt="Personas amigables"
          width={300}
          height={250}
        />
        <Title>SOMOS AMIGABLES</Title>
        <Text>
          Contamos con un equipo dedicado para acompañarte en el proceso y
          atender cualquier inquietud que tengas acerca de nuestro desarrollo,
          contactanos.
        </Text>
        <Button>Contactar</Button>
      </Section>
    </Container>
  );
};

export { CallActions };
