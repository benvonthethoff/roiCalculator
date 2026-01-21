/**
 * Format a number as currency with thousand separators
 */
export function formatCurrency(value: number): string {
  if (!value && value !== 0) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Parse a currency string back to a number
 * Removes $, commas, and other non-numeric characters
 */
export function parseCurrency(value: string): number {
  const cleaned = value.replace(/[^0-9.-]/g, "");
  return cleaned ? Number(cleaned) : 0;
}
