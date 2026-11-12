import { describe, expect, it } from "vitest";
import { CHECKOUT_URL, META_PIXEL_ID, PRODUCT } from "@/lib/config";
import { formatBRL, getCheckoutHref } from "@/lib/checkout";

describe("checkout rules", () => {
  it("prices the kit at R$ 17,99", () => {
    expect(formatBRL(PRODUCT.price)).toBe("R$ 17,99");
  });

  it("has no checkout link while CHECKOUT_URL is empty", () => {
    expect(getCheckoutHref("")).toBeNull();
    expect(getCheckoutHref("   ")).toBeNull();
  });

  it("uses the Kiwify link once it is set", () => {
    expect(getCheckoutHref("https://pay.kiwify.com.br/abc123")).toBe("https://pay.kiwify.com.br/abc123");
  });

  it("rejects non-https checkout links", () => {
    expect(getCheckoutHref("http://pay.kiwify.com.br/abc123")).toBeNull();
    expect(getCheckoutHref("not a url")).toBeNull();
  });

  it("ships with no invented checkout link or pixel ID", () => {
    expect(CHECKOUT_URL).toBe("");
    expect(META_PIXEL_ID).toBe("");
  });
});
