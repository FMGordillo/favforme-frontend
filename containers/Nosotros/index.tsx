import { Container, Layout, Title } from "@/components";
import { NextPage } from "next";
import Image from "next/image";
import { AlliancesSection } from "../Index/components";
import {
  HighlightSection,
  ThreeColumns,
  Section,
  Subtitle,
  TwoColumnSection,
} from "./styles";

export const AboutUsPage: NextPage = () => {
  return (
    <Layout header title="Somos FavForMe">
      <Container spacing={2}>
        <Section mainScreen>
          <p>
            La Fundación FavForMe impulsa el desarrollo de acciones de impacto
            social positivo, ayudando a las ONGs a conseguir los recursos a
            través de crowdfunding
          </p>
        </Section>
        <TwoColumnSection>
          <div className="content">
            <Title>Misión FavForMe</Title>
            <p>
              Insertarnos como equipo de fundraising para ONGs, asegurando a los
              donantes que los recursos invertidos llegan a su destino. Nuestra
              visión es revolucionar la forma de ayudar en la sociedad, queremos
              que las personas también sean recompensadas por participar.
            </p>
          </div>
          <div className="img">
            <Image
              src="/asdasdas"
              width={100}
              height={100}
              alt="Personas con lapices"
            />
          </div>
        </TwoColumnSection>
        <HighlightSection>
          <Title weight="500">Que venimos a resolver</Title>
          <ThreeColumns>
            <div>
              <Subtitle as="h2">ONG&apos;s</Subtitle>
              <p>
                Sabemos que muchas organizaciones no gubernamentales, y sin
                fines de lucro, suelen bajar los brazos frente a la
                imposibilidad de entregar más de lo que tienen.{" "}
                <b>
                  En la mayoría de los casos terminan agotándose por no contar
                  con los recursos suficientes para cumplir sus objetivos.
                </b>
              </p>
            </div>
            <div>
              <Subtitle as="h2">Empresas</Subtitle>
              <p>
                También <b>existen muchas pequeñas y medianas empresas</b> que,
                si bien no cuentan con un área específica dedicada a la
                responsabilidad social,{" "}
                <b>
                  tienen interés de crear o participar de este tipo de programas
                </b>{" "}
                ofreciendo productos, servicios, horas de apoyo y hasta fondos.
              </p>
            </div>
            <div>
              <Subtitle as="h2">ODS</Subtitle>
              <p>
                El objetivo es permitir a las ONGs y, a las empresas que se
                sumen, dar un primer paso en este camino y{" "}
                <b>
                  ofrecerles una oportunidad de alcanzar Objetivos de Desarrollo
                  Sostenible
                </b>{" "}
                reafirmando su compromiso hacia la comunidad.
              </p>
            </div>
          </ThreeColumns>
        </HighlightSection>
        <Section>
          <Title>El equipo</Title>
          TODO: TERMINAR ESTO
        </Section>
        <Section>
          <AlliancesSection />
        </Section>
      </Container>
    </Layout>
  );
};
