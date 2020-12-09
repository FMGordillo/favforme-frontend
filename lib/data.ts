// TODO: Que hacemos con esto?
type MoneyObjective = {
  amount: number;
  currencyType: string;
};

type SocialNetwork = "facebook" | "instagram" | "twitter" | "linkedin";

/**
 * TODO: Actualizar Favor (o Action) para tener estos valores
 */
export interface Action {
  id: string | number;
  title: string;
  description: string;
  history?: string; // TODO: Esto no va aca
  owner: string;
  homepage?: string;
  imageSrc?: string;
  logo?: string;
  objective?: {
    current: MoneyObjective;
    final: MoneyObjective;
  };
  socialNetworks: [Partial<Record<SocialNetwork, string>>];
  peopleBeneficted?: number;
  contact: string[];
}

export const favors: { favors: Action[] } = {
  favors: [
    {
      id: 1,
      owner: "Centro Comunitario Otro Mundo",
      history:
        "El centro nacio en Diciembre del 2016, arrancando como merendero dentro de la sociedad de fomento Este del Pilar. Luego de realizar varias ferias para recaudar fondos, pudimos construir el espacio propio para comenzar a funcionar como Centro Comunitario. Actualmente participan mas de 80 niños, niñas y adolescentes y 20 mamas, a las meriendas, a las actividades deportivas como es el futbol, al apoyo escolar, a los talles de costura y de encuadernacion. Tambien contamos con huerta, realizamos salidas recreativas y talleres sobre salud y educacion sexual.",
      title: "Ollas Populares",
      description:
        "Actualemente y desde hace 8 meses, realizamos ollas populares de Lunes a Lunes para mas de 30 familias del barrio.",
      objective: {
        current: {
          currencyType: "ARS",
          amount: 0,
        },
        final: {
          currencyType: "ARS",
          amount: 80000,
        },
      },
      logo: "/images/alianzas_06.png",
      imageSrc: "/images/accion_placeholder_1.jpg",
      peopleBeneficted: 150,
      contact: ["1137577188", "merenderootromundo@gmail.com"],
      socialNetworks: [{ twitter: "https://twitter.com" }],
    },
    {
      id: 2,
      owner: "DE LA NADA Asociación Civil",
      history:
        "DE LA NADA nace en octubre de 1999 por la volundad de 4 personas que se unieron inspiradas  por la metodología de microcréditos de Muhammad Yunus (economista de Blangladesh y premio nobel de la Paz en 2006).  Desde hace 20 años lleva adelante programas de promoción social que apuntan a brindar las herramientas para que las personas de bajos recursos económicos logren desarrollar su potencial a través del trabajo y la educación.  Nuestro lema es sumar trabajo para restar pobreza.",
      homepage: "www.delanada.org",
      title: "AMPLIANDO HORIZONTES",
      description:
        "Es un programa por medio del cual acompañamos a personas que quieren salir adelante a partir del propio trabajo.   Brindamos un apoyo integral para que puedan emprender. No solo se los capacita en Gestión de Emprendimientos, se les enseña a  cómo llevar adelante un negocio, sino también se le da la oportunidad de acceder a  microcréditos para comprar insumos, herramientas o equipamiento para llevar adelante el negocio. Se los acompaña de manera cotidiana y continua en todo el proceso de emprender.",
      objective: {
        current: {
          currencyType: "ARS",
          amount: 0,
        },
        final: {
          currencyType: "ARS",
          amount: 210000,
        },
      },
      logo: "/images/alianzas_05.png",
      imageSrc: "/images/accion_placeholder_2.jpg",
      peopleBeneficted: 50,
      contact: ["2323643915", "info@delanada.org"],
      socialNetworks: [{ twitter: "https://twitter.com" }],
    },
  ],
};

export const parseToCurrency = (value: number): string => {
  const formatCurrency = Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "ARS",
  }).resolvedOptions();
  return value.toLocaleString("es-ES", {
    ...formatCurrency,
    style: "decimal",
  });
};
