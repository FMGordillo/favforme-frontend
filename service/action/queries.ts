import { gql } from "@apollo/client";

export const GET_ID_ACTIONS = gql`
  {
    actions {
      id
    }
  }
`;

export const GET_ACTION = gql`
  query getAction($id: String) {
    findFirstAction(
      where: {
        AND: {
          id: { equals: $id }
          status: { equals: INPROGRESS }
          organization: { is: { status: { equals: APPROVED } } }
        }
      }
    ) {
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
      donations(where: { paymentStatus: { equals: SUCCESS } }) {
        id
        amount
        createdAt
        user {
          name
          surname
          userType
        }
      }
    }
  }
`;

export const GET_ACTIONS = gql`
  {
    actions(
      where: {
        AND: {
          status: { equals: INPROGRESS }
          organization: { is: { status: { equals: APPROVED } } }
        }
      }
    ) {
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
