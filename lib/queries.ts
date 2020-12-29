import { gql } from "@apollo/client";

export const GET_ACTIONS = gql`
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
