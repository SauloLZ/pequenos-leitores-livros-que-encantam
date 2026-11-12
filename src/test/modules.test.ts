import { describe, expect, it } from "vitest";
import { PRODUCT } from "@/lib/config";
import { KIT_MODULES, activityCount } from "@/lib/modules";

describe("kit content", () => {
  it("has 12 modules", () => {
    expect(KIT_MODULES).toHaveLength(12);
    expect(KIT_MODULES).toHaveLength(PRODUCT.modules);
  });

  it("adds up to 200 activities with no gaps between modules", () => {
    const total = KIT_MODULES.reduce((sum, m) => sum + activityCount(m), 0);
    expect(total).toBe(200);
    KIT_MODULES.forEach((m, i) => {
      if (i > 0) expect(m.firstActivity).toBe(KIT_MODULES[i - 1].lastActivity + 1);
    });
  });
});
