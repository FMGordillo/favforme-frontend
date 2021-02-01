export interface Params {
  // where?: any;
  take?: number;
  skip?: number;
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
