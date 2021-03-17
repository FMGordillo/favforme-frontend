/**
 * TODO: This should be aligned with the schema.prisma (maybe monolithic app?)
 */

export type SocialNetworkName =
  | "FACEBOOK"
  | "TWITTER"
  | "INSTAGRAM"
  | "LINKEDIN";

export type Status = "DRAFT" | "INPROGRESS" | "COMPLETED" | "CANCELLED";

export interface SocialNetwork {
  id: string;
  type: SocialNetworkName;
  name?: string; // "others"
  link: string;
}

export interface Organization {
  id: string;
  name: string;
  logo?: string;
  history?: string;
  homepage?: string;
  actions: ActionI[];
  socialNetworks: SocialNetwork[];
}

export interface ActionI {
  id: string;
  title: string;
  description: string;
  peopleBeneficted?: number;
  current: number; // $$$
  objective: number; // $$$
  organization: Organization;
  organizationId: number;
  deleted: boolean;
  status: Status;
}

export interface DonationI {
  id: string;
  amount: number;
  currency: string;
  user: User;
  userId: string;
  // favors: Favor
  // favorId: string
  action: ActionI;
  actionId: string;
  paymentStatus: string;
  updatedAt: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
}
/**
 * TODO: Move this to Apollo requests
 */
export interface GetActionsData {
  actions: ActionI[];
}
