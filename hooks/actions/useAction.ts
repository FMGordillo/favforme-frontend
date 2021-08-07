import { ActionI } from "../../lib/types";
import request from "graphql-request";

const GET_ACTION = `
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

export const getAction = async (query: any): Promise<ActionI | null> => {
  try {
    const { action } = await request<{ action: ActionI }>(
      process.env.NEXT_PUBLIC_BACKEND_URL || "",
      GET_ACTION,
      query
    );
    return action;
  } catch (error) {
    console.log("WOT", error);
    return null;
  }
};
