import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const ollasPopularesAction = await prisma.action.create({
    data: {
      title: "Ollas Populares",
      description:
        "Actualemente y desde hace 8 meses, realizamos ollas populares de Lunes a Lunes para mas de 30 familias del barrio.",
      objective: "80000",
      ods: { set: ["GOOD_HEALTH"] },
      current: 0,
      peopleBeneficted: 150,
      mainImage: "/images/actions/ollas_populares.jpg",
      organization: {
        create: {
          name: "Centro Comunitario Otro Mundo",
          history:
            "El centro nacio en Diciembre del 2016, arrancando como merendero dentro de la sociedad de fomento Este del Pilar. Luego de realizar varias ferias para recaudar fondos, pudimos construir el espacio propio para comenzar a funcionar como Centro Comunitario. Actualmente participan mas de 80 niños, niñas y adolescentes y 20 mamas, a las meriendas, a las actividades deportivas como es el futbol, al apoyo escolar, a los talles de costura y de encuadernacion. Tambien contamos con huerta, realizamos salidas recreativas y talleres sobre salud y educacion sexual.",
          logo: "/images/alianzas_06.png",
          contact: {
            create: [
              { type: "PHONE", content: "1137577188" },
              { type: "EMAIL", content: "merenderootromundo@gmail.com" },
            ],
          },
          socialNetworks: {
            create: [
              {
                type: "INSTAGRAM",
                link: "https://www.instagram.com/otromundodelviso/",
              },
              {
                type: "FACEBOOK",
                link: "https://www.facebook.com/otromundodelviso",
              },
            ],
          },
        },
      },
    },
  });

  const ampliandoHorizontesAction = await prisma.action.create({
    data: {
      title: "AMPLIANDO HORIZONTES",
      description:
        "Es un programa por medio del cual acompañamos a personas que quieren salir adelante a partir del propio trabajo.   Brindamos un apoyo integral para que puedan emprender. No solo se los capacita en Gestión de Emprendimientos, se les enseña a  cómo llevar adelante un negocio, sino también se le da la oportunidad de acceder a  microcréditos para comprar insumos, herramientas o equipamiento para llevar adelante el negocio. Se los acompaña de manera cotidiana y continua en todo el proceso de emprender.",
      objective: "252000",
      current: 0,
      peopleBeneficted: 50,
      ods: { set: ["DECENT_WORK"] },
      mainImage: "/images/actions/ampliando_horizontes.jpg",
      organization: {
        create: {
          homepage: "www.delanada.org",
          name: "DE LA NADA Asociación Civil",
          history:
            "DE LA NADA nace en octubre de 1999 por la volundad de 4 personas que se unieron inspiradas  por la metodología de microcréditos de Muhammad Yunus (economista de Blangladesh y premio nobel de la Paz en 2006).  Desde hace 20 años lleva adelante programas de promoción social que apuntan a brindar las herramientas para que las personas de bajos recursos económicos logren desarrollar su potencial a través del trabajo y la educación.  Nuestro lema es sumar trabajo para restar pobreza.",
          logo: "/images/alianzas_05.png",
          contact: {
            create: [
              { type: "PHONE", content: "+5492323643915" },
              { type: "EMAIL", content: "info@delanada.org" },
            ],
          },
          socialNetworks: {
            create: [
              {
                type: "INSTAGRAM",
                link: "https://www.instagram.com/de_la_nada_asoc/",
              },
              {
                type: "FACEBOOK",
                link: "https://www.facebook.com/DeLaNadaAsociacionCivil",
              },
            ],
          },
        },
      },
    },
  });

  console.log(ollasPopularesAction, ampliandoHorizontesAction);
}

main()
  .catch((e) => {
    // console.error(chalk.bgRed("Error"), e);
    console.error("UF", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
