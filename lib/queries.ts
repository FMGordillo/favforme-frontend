import request from "graphql-request";

export interface Params {
  where?: string; // TODO: Evitar que toma un String :c
  take?: number;
  skip?: number;
  cursor?: string; // TODO: Evitar que toma un String :c
  // orderBy?: any;
}

export const createQuery = (
  query: TemplateStringsArray,
  params?: Params
): string => {
  const part1 = query[0];
  const part2 = query[1];
  const parsedParams = Object.entries(params || {}).map(
    ([paramKey, paramValue]) => `${paramKey}: ${paramValue}`
  );

  if (parsedParams.length > 0) {
    return `${part1}(${parsedParams.join()})${part2}`;
  } else {
    return `${part1}${part2}`;
  }
};

export const fetcher = (
  query: string,
  params: unknown
): Promise<Record<string, any>> => {
  return request(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql` || "",
    query,
    params
  );
};
