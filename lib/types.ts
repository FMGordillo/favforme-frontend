/**
 * Sacado del backend
 * @TODO Unificar backend y frontend types
 */
export enum ODS {
  NO_POVERTY,
  ZERO_HUNGER,
  GOOD_HEALTH,
  QUALITY_EDUCATION,
  GENDER_EQUITY,
  CLEAN_WATER,
  CLEAN_ENERGY,
  DECENT_WORK,
  INDUSTRY_INNOVATION_INFRASTRUCTURE,
  REDUCE_INEQUITIES,
  SUSTAINABLE_CITIES,
  RESPONSIBLE_CONSUMPTION_PRODUCTION,
  CLIMATE_ACTION,
  LIFE_BELOW_WATER,
  LIFE_ON_LAND,
  PEACE_JUSTICE_INSTITUTIONS,
  PARTNERSHIP_FOR_GOALS,
}

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
  gallery?: string[];
  mainImage?: string;
  description: string;
  peopleBeneficted?: number;
  current: string; // $$$
  objective: string; // $$$
  organization: Organization;
  ods: ODS[];
  deleted: boolean;
  status: Status;
  closedAt?: string; // Date-ish format
  createdAt: string; // Date-ish format
  donations?: DonationI[];
}

export interface DonationI {
  id: string;
  amount: string;
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
  name: string | null;
  surname: string | null;
  email: string;
  userType: "USER" | "BUSINESS";
}
/**
 * TODO: Move this to Apollo requests
 */
export interface GetActionsData {
  actions: ActionI[];
}
