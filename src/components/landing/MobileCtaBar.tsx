import { PRODUCT } from "@/lib/config";
import { formatBRL } from "@/lib/checkout";
import { CtaButton } from "./CtaButton";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <p className="text-[0.7rem] font-semibold leading-none text-muted-foreground">Kit completo</p>
          <p className="font-display text-xl font-bold leading-tight text-foreground">{formatBRL(PRODUCT.price)}</p>
        </div>
        <CtaButton location="mobile_bar" label="Quero meu kit" size="pill" className="flex-1" showIcon={false} />
      </div>
    </div>
  );
}
