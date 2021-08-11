import { Params, createQuery } from "@/lib/queries";

export const GET_ACTION = `
  query getAction($id: String) {
    action(where: { id: $id }) {
      id
      title
      ods
      current
      objective
      description
      mainImage
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

export const GET_ACTIONS = (params?: Params): string => createQuery`
  {
    actions${params} {
      id
      title
      ods
      current
      objective
      closedAt
      createdAt
      mainImage
      organization {
        socialNetworks {
          type
          link
        }
      }
    }
  }
`;
