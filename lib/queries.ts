// TODO: Not working, yet
interface Params {
  // where?: any;
  take?: number;
  skip?: number;
  // orderBy?: any;
}

const createQuery = (query: TemplateStringsArray, params?: Params) => {
  const part1 = query[0];
  const part2 = query[1];
  const parsedParams = Object.entries(params || {}).map(
    ([paramKey, paramValue]) => `${paramKey}: ${paramValue}`
  );

  if (parsedParams.length > 0) {
    return `${part1}(${parsedParams.join()})${part2}`;
  } else {
    return `${part1}${part2}`;
  }
};

export const GET_ACTIONS = (params?: Params): string => createQuery`
  {
    actions${params} {
      id
      title
      current
      objective
      organization {
        socialNetworks {
          type
          link
        }
      }
    }
  }
`;

export const GET_ACTION = `
  query getAction($id: String) {
    action(where: { id: $id }) {
      id
      title
      current
      objective
      description
      organization {
        logo
        history
        socialNetworks {
          type
          link
        }
      }
    }
  }
`;
