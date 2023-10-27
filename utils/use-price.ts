import { siteSettings } from "@settings/site.settings";
import { settings } from "@data/settings";
export function formatPrice({
  amount,
  currencyCode,
  locale,
}: {
  amount: number;
  currencyCode: string;
  locale: string;
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  });

  return formatCurrency.format(amount);
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale,
}: {
  baseAmount: number;
  amount: number;
  currencyCode: string;
  locale: string;
}) {
  const hasDiscount = baseAmount < amount;
  const formatDiscount = new Intl.NumberFormat(locale, { style: "percent" });
  const discount = hasDiscount
    ? formatDiscount.format((amount - baseAmount) / amount)
    : null;

  const price = formatPrice({ amount, currencyCode, locale });
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale })
    : null;

  return { price, basePrice, discount };
}
type PriceProps = {
  amount: number;
  baseAmount?: number;
  currencyCode?: string;
};
export default function usePrice(data?: PriceProps | null) {
  const { currency } = settings.options;
  const { amount, baseAmount, currencyCode = currency } = data ?? {};
  const locale = siteSettings.defaultLanguage;
  const value = typeof amount !== "number" || !currencyCode 
    ? "" 
    : (baseAmount
        ? formatVariantPrice({ amount, baseAmount, currencyCode, locale })
        : formatPrice({ amount, currencyCode, locale })
    );

  return typeof value === "string"
    ? { price: value, basePrice: null, discount: null }
    : value;
}
