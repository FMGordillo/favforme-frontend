import {
  Advisor,
  AdvisorName,
  HighlightSection,
  Member,
  Section,
  Subtitle,
  Team,
  ThreeColumns,
  TwoColumnSection,
} from "./styles";
import { Container, Layout, Title } from "@/components";
import { AlliancesSection } from "../IndexPage/components";
import Image from "next/image";
import { NextPage } from "next";

export const AboutUsPage: NextPage = () => {
  return (
    <Layout header title="Nosotros">
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
            <Title>La Misión FavForMe</Title>
            <p>
              Insertarnos como equipo de fundraising para ONGs, asegurando a los
              donantes que los recursos invertidos llegan a su destino. Nuestra
              visión es revolucionar la forma de ayudar en la sociedad,{" "}
              <b>
                queremos que las personas también sean recompensadas por
                participar.
              </b>
            </p>
          </div>
          <div className="img">
            <Image
              src="/images/mision_ffm.webp"
              width={550}
              height={350}
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
          <Team>
            <Member>
              <Image
                src="/images/founders/team_01.png"
                alt="Foto de Matias Gonzalez"
                width={200}
                height={200}
              />
              <p>Matias Gonzalez</p>
              <br />
              <span>
                CEO
                <br />
                Chief Executive Officer
              </span>
            </Member>
            <Member>
              <Image
                src="/images/founders/team_02.png"
                alt="Foto de Martin Zucchi"
                width={200}
                height={200}
              />
              <p>Martin Zucchi</p>
              <br />
              <span>
                CFO
                <br />
                Chief Finantial Officer
              </span>
            </Member>
            <Member>
              <Image
                src="/images/founders/team_03.png"
                alt="Foto de Agustin Rosso"
                width={200}
                height={200}
              />
              <p>Agustin Rosso</p>
              <br />
              <span>
                CDO
                <br />
                Chief Design Officer
              </span>
            </Member>
            <Member>
              <Image
                src="/images/founders/team_04.png"
                alt="Foto de Facundo Gordillo"
                width={200}
                height={200}
              />
              <p>Facundo Gordillo</p>
              <br />
              <span>
                CTO
                <br />
                Chief Technical Officer
              </span>
            </Member>
            <Member>
              <Image
                src="/images/founders/team_05.png"
                alt="Foto de Ezequiel Serra"
                width={200}
                height={200}
              />
              <p>Ezequiel Serra</p>
              <br />
              <span>
                CLO
                <br />
                Chief Legal Officer
              </span>
            </Member>
            <Member>
              <Image
                src="/images/founders/team_06.png"
                alt="Foto de Guillermo Cónema"
                width={200}
                height={200}
              />
              <p>Guillermo C&oacute;nema</p>
              <br />
              <span>
                CCO
                <br />
                Chief Creative Officer
              </span>
            </Member>
          </Team>
        </Section>
        <HighlightSection>
          <Title>Los advisors</Title>
          <ThreeColumns>
            <Advisor>
              <Image
                className="image"
                width={200}
                height={200}
                src="/images/advisors/advisor_01.webp"
                alt="Foto de Horacio Cuervo"
              />
              <AdvisorName as="h2">Horacio Cuervo</AdvisorName>
              <p>
                Asesor en Estrategia e Innovación
                <br />
                Empresarial. Director del Founder Institute
                <br />
                Buenos Aires. Advisor y Asesor Ejecutivo.
                <br />
                Mentor. Director Independiente. #Ristretter
              </p>
            </Advisor>
            <Advisor>
              <Image
                className="image"
                width={200}
                height={200}
                src="/images/advisors/advisor_02.webp"
                alt="Foto de Pablo Gustavo Cotarelo"
              />
              <AdvisorName as="h2">Gustavo Cotarelo</AdvisorName>
              <p>
                VP M&A, Financial Advising en VRG
                <br />
                Argentina - RBiasca y Asociados.
              </p>
            </Advisor>
            <Advisor>
              <Image
                className="image"
                width={200}
                height={200}
                src="/images/advisors/advisor_03.webp"
                alt="Foto de Pablo Agustín Escontrela"
              />
              <AdvisorName as="h2">Pablo Agustín Escontrela</AdvisorName>
              <p>
                Vicepresidente de desarrollo
                <br />
                comercial en Freemoni.
              </p>
            </Advisor>
          </ThreeColumns>
        </HighlightSection>
        <Section>
          <AlliancesSection />
        </Section>
      </Container>
    </Layout>
  );
};
