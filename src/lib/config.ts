/**
 * Central configuration for the landing page.
 * Fill these in when the real values are available — nothing here is invented.
 */

/** Kiwify checkout link. Leave empty until the real link exists. */
export const CHECKOUT_URL = "";

/** Meta (Facebook) Pixel ID. Leave empty until you have the real ID. */
export const META_PIXEL_ID = "";

export const PRODUCT = {
  name: "Pequenos Leitores",
  subtitle: "Kit de Alfabetização",
  fullName: "Pequenos Leitores — Kit de Alfabetização",
  price: 17.99,
  currency: "BRL",
  activities: 200,
  modules: 12,
} as const;

/** Contact info shown in the footer. Empty values render as "em breve". */
export const CONTACT = {
  email: "",
  whatsapp: "",
  instagram: "",
} as const;
