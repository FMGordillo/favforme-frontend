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
  id: number;
  type: SocialNetworkName;
  name?: string; // "others"
  link: string;
}

export interface Organization {
  id: number;
  name: string;
  logo?: string;
  history?: string;
  homepage?: string;
  actions: Action[];
  socialNetworks: SocialNetwork[];
}

export interface Action {
  id: number;
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

/**
 * TODO: Move this to Apollo requests
 */

export interface GetActionsData {
  actions: Action[];
}