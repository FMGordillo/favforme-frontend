/**
 * TODO: Check if we lose data with this
 * @param value Default to 0
 */
export const parseToCurrency = (value = "0"): string => {
  try {
    if (!BigInt(value) || BigInt(value) < 0) return "0";
    const numberedValue = Number(value);
    const formatCurrency = Intl.NumberFormat("es-ES", {
      style: "currency",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      currency: "ARS",
    }).resolvedOptions();
    return numberedValue.toLocaleString("es-ES", {
      ...formatCurrency,
      style: "decimal",
    });
  } catch (error) {
    return "0";
  }
};

interface GetProgresValueParams {
  currentAmount?: string | undefined;
  finalAmount?: string | undefined;
}

export const getProgressValue = ({
  currentAmount = "0",
  finalAmount,
}: GetProgresValueParams): string => {
  if (Number.isNaN(currentAmount) || Number.isNaN(finalAmount)) return "0";
  const numberCurrentAmount = Number(currentAmount);
  const numberFinalAmount = Number(finalAmount || 0);
  return (
    (numberCurrentAmount * 100) /
    (numberFinalAmount || numberCurrentAmount)
  ).toFixed();
};
