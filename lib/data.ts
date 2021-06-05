/**
 * @param value Default to 0
 */
export const parseToCurrency = (value = "0"): string => {
  try {
    if (Number.isNaN(value) || value === "0") return "0";
    const numberedValue = Number(value);
    const formatCurrency = Intl.NumberFormat("es-ES", {
      style: "currency",
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
  currentAmount?: string;
  finalAmount?: string;
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

interface GetProgresValueParams {
  currentAmount?: string;
  finalAmount?: string;
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
