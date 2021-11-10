/**
 * @default 0
 */
export const toPascalCase = (string: string | undefined): string =>
  string
    ? string.replace(/(\w)(\w*)/g, function (_g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      })
    : "";
