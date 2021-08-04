import { ODS } from "@prisma/client";

export const getODSImage = (ods: ODS | undefined): string => {
  if (!ods) return "";
  const odsNumberOriginal = Object.keys(ODS).findIndex((k) => k === ods) + 1;
  const odsNumber =
    odsNumberOriginal < 10 ? `0${odsNumberOriginal}` : odsNumberOriginal;
  return `/images/ods-images/ods-es-${odsNumber}.png`;
};
