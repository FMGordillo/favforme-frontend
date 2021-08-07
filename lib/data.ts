/**
 * @param value Default to 0
 */
export const parseToCurrency = (value = 0): string => {
  try {
    if (!value) return "0";
    const formatCurrency = Intl.NumberFormat("es-ES", {
      style: "currency",
      maximumFractionDigits: 0,
      currency: "ARS",
    }).resolvedOptions();
    return value.toLocaleString("es-ES", {
      ...formatCurrency,
      style: "decimal",
    });
  } catch (error) {
    return "0";
  }
};

interface GetProgresValueParams {
  currentAmount?: number;
  finalAmount?: number;
}

export const getProgressValue = ({
  currentAmount = 0,
  finalAmount,
}: GetProgresValueParams): string => {
  return ((currentAmount * 100) / (finalAmount || currentAmount)).toFixed();
};
