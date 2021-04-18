import { Container, Layout, Title } from "@/components";
import { NextPage } from "next";
import Image from "next/image";
import { AlliancesSection } from "../Index/components";
import { Section, TwoColumnSection } from "./styles";

export const AboutUsPage: NextPage = () => {
  return (
    <Layout header title="Somos FavForMe">
      <Container>
        <Section>
          <p>
            FavForMe es una plataforma de crowdfunding que ayuda a realizar
            acciones de impacto social positivo. Conectando a las personas con
            ONGs y empresas socialmente responsables.
          </p>
          <p>
            Nuestra bitácora de navegación son los Objetivos de Desarrollo
            Sostenibles (ODS) propuestos por la ONU.
          </p>
        </Section>
        <TwoColumnSection>
          <div className="content">
            <Title>Misión</Title>
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
        <Section>
          <Title>Nuestra historia</Title>
          <p>
            Hace 7 años Matías (CEO FOUNDER) hacía fletes. Un día un amigo le
            pidió un favor, necesitaba un flete pero no tenía dinero, y Matías
            con gusto accedió. En ese momento se dio cuenta de que le gustaba la
            sensación que dejaba ayudar a otra persona. Un día viendo la
            película, “Cadena de favores” tuvo una revelación, y sintió que
            debía hacer algo más grande con la idea de ayudar.
          </p>
          <p>
            Matías le presenta la idea a su amigo Ryan y comenzaron a construir
            FAVFORME un proyecto creado para pedir y ofrecer favores entre
            personas, como una cadena de favores. Hubo mucho trabajo y dinero
            invertido, además de malas experiencias con empresas de desarrollo
            tecnológico (dos en Argentina y una en India). En la última
            experiencia, una empresa Argentina les aconseja ser un app mobile.
            Lograron construir FAVFORME, pero nunca se pensó en cómo se iba a
            conseguir revenue. En este punto se quedaron sin recursos y Ryan se
            va del proyecto.
          </p>
          <p>
            Matías analiza la situación y se da cuenta que su proyecto no
            avanzaba porque no tenía la formación necesaria. Ya hace más de tres
            años que estudia relaciones públicas, participando paralelamente en
            capacitaciones, charlas y todo lo referido a emprendedurismo. Así
            fue que conoció a más de 15 ONGs con las cuales conversó y mostraron
            interés de participar en FavForMe. A su vez algunas organizaciones
            lo pusieron en contacto con empresas que tenían la iniciativa de
            crear algún programa de RSE con el proyecto, pero Matías estaba
            solo.
          </p>
          <p>
            En el 2019 buscando en internet “cómo encontrar un co-founder”,
            descubre el programa del Founder Institute donde fue becado con la
            mitad del curso. Mientras participaba del programa, Matías fue
            armando un equipo, junto a un abogado, un contador, un diseñador
            gráfico, y un desarrollador. Hoy en día, con una nueva mirada al
            proyecto FAVFORME
          </p>
        </Section>
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
