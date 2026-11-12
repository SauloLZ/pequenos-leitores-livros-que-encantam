import { CHECKOUT_URL } from "./config";

/** Formats a value as Brazilian Real, e.g. 17.99 -> "R$ 17,99". */
export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
    .format(value)
    .replace(/\u00a0/g, " ");
}

/** Returns the checkout link, or null while it hasn't been configured. */
export function getCheckoutHref(url: string = CHECKOUT_URL): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "https:" ? parsed.toString() : null;
  } catch {
    return null;
  }
}
