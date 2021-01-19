export const GET_ACTIONS = `
  {
    actions {
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
