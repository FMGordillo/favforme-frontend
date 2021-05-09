import { ODS } from "./types";

export const getODSImage = (ods: ODS | undefined): string => {
  if (!ods) return "";
  const odsNumberOriginal = Number(ODS[ods]) + 1;
  const odsNumber =
    odsNumberOriginal < 10 ? `0${odsNumberOriginal}` : odsNumberOriginal;
  return `/images/ods-images/ods-es-${odsNumber}.png`;
};
