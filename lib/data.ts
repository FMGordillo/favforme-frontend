/**
 * @param value Default to 0
 */
export const parseToCurrency = (value = 0): string => {
  const formatCurrency = Intl.NumberFormat("es-ES", {
    style: "currency",
    maximumFractionDigits: 0,
    currency: "ARS",
  }).resolvedOptions();
  return value.toLocaleString("es-ES", {
    ...formatCurrency,
    style: "decimal",
  });
};
