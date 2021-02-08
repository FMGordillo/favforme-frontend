import { NextPage } from "next";
import { Layout, Container } from "../components";

const AboutUsPage: NextPage = () => {
  return (
    <Layout header title="Nosotros">
      <Container>
        <section>
          <h1>Somos FavForMe</h1>
          <p>
            Venimos a realizar acciones de impacto social positivo. Conectamos a
            las personas que les gusta ayudar con ONGs y Empresas Socialmente
            Responsables. Nuestra bitácora de navegación son los Objetivos de
            Desarrollo Sostenibles propuestos por la ONU en el año 2015.
          </p>
        </section>
        <section>
          <h1>Nuestra misión</h1>
          <p>
            En FavForMe tenemos una misión muy importante: Hacer que las
            personas ayuden más y compartir ese resultado con los demás.
          </p>
          <p>
            En nuestros 5 años de experiencia descubrimos que{" "}
            <b>
              muchas organizaciones bajan los brazos por dar más de lo que
              tienen
            </b>
            , dedican su vida ayudando en proyectos de impacto social y en la
            mayoría de los casos se agotan por no contar con los recursos
            suficientes para cumplir sus objetivos. Nuestra visión es
            revolucionar la forma de ayudar en la sociedad, haciendo que las
            personas sean recompensadas por participar. De esta manera podemos
            crear un entorno sostenible para las acciones de impacto positivo.
            Buscamos incentivar a todos los usuarios para que transforme
            realidades, <b>creando lazos entre personas y necesidades</b>.
          </p>
        </section>
        <section>
          <h1>Objetivos</h1>
          <ul>
            <li>
              Crear un entorno seguro, transparente y amigable para los usuarios
            </li>
            <li>
              Ser una herramienta que conecte Voluntarios, ONGs y Empresas
            </li>
            <li>
              Convertirnos en el puente entre las necesidades y las acciones,
              haciendo más simple y efectivo el desarrollo de campañas benéficas
            </li>
            <li>
              Ofrecer la oportunidad perfecta para demostrar el compromiso de
              una organización con el medio ambiental y social en el que
              desarrolla, con la posibilidad de obtener un beneficio extra: que
              sus proyectos e ideales se repliquen en miles de personas que
              estén dispuestas a colaborar para construir un mejor entorno
            </li>
          </ul>
        </section>
        <section>
          <h1>Participantes</h1>
          <p>
            CONECTAMOs a los actores más importantes a través de distintas
            cadenas de favores, uniendo el esfuerzo de Voluntarios, ONGs y
            Empresas Socialmente Responsables
          </p>
        </section>
        <section>
          <h1>Dinámica</h1>
          <p>
            FavForMe incentiva a los usuarios a realizar distintos tipos de
            favores entre sí. Mediante los mismos, los usuarios reciben puntos
            que podrán destinar a las diferentes acciones benéficas activas.
            Nosotros convertimos esos puntos en recursos reales, por ejemplo:
            platos de comida, capacitaciones, reforestación, etc.
          </p>
          <p>
            Mediante FavForMe las Empresas Socialmente Responsables pueden
            destinar recursos a las diferentes ACCIONEs activas, propuestas por
            las ONGs que participen de nuestro programa. Buscamos potenciar la
            realización de las acciones y como somos TRANSPARENTES, ofrecemos
            informes que demuestran cómo se han implementado estos recursos y el
            IMPACTO POSITIVO generado.
          </p>
        </section>
        <section>
          <h1>Primeros pasos</h1>
          <ul>
            <li>
              Validar producto con nuestra APP MOBILE, una comunidad donde los
              usuarios pueden ayudarse entre sí haciendo favores
            </li>
            <li>
              Desarrollar nuestro WEB SITE para crear un vínculo entre los
              ideales de las Empresas Responsables y las Acciones activas
            </li>
            <li>
              Replicar en las REDES SOCIALES toda la información del mundo
              FavForMe, incentivando a miles de usuarios diariamente a sumarse
              para crear un mundo más favorable
            </li>
          </ul>
        </section>
        <section>
          <h1>El equipo</h1>
          <p>
            Somos un equipo de personas con una idea en común: Las buenas
            acciones se contagian y siempre traen beneficios. FavForMe nació de
            la voluntad de crear oportunidades para relacionar personas
            dispuestas a construir mejores relaciones sociales. Creemos que la
            solidaridad y en el respeto al otro, y en base a esa creencia
            llevamos a cabo nuestras acciones.
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default AboutUsPage;
