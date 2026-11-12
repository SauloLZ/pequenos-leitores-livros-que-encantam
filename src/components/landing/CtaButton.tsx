import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Button, type ButtonProps } from "@/components/ui/button";
import { PRODUCT } from "@/lib/config";
import { formatBRL, getCheckoutHref } from "@/lib/checkout";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  /** Where on the page the button sits — sent with the click event. */
  location: string;
  label?: string;
  size?: ButtonProps["size"];
  className?: string;
  showIcon?: boolean;
}

export const DEFAULT_CTA_LABEL = `Quero meu kit por ${formatBRL(PRODUCT.price)}`;

export function CtaButton({
  location,
  label = DEFAULT_CTA_LABEL,
  size = "xl",
  className,
  showIcon = true,
}: CtaButtonProps) {
  const href = getCheckoutHref();
  const eventParams = {
    location,
    content_name: PRODUCT.fullName,
    value: PRODUCT.price,
    currency: PRODUCT.currency,
  };

  if (href) {
    return (
      <Button asChild variant="cta" size={size} className={cn("whitespace-normal text-center", className)}>
        <a
          href={href}
          rel="noopener"
          onClick={() => {
            trackEvent("CtaClick", eventParams);
            trackEvent("InitiateCheckout", eventParams);
          }}
        >
          {showIcon && <ShoppingBag />}
          {label}
        </a>
      </Button>
    );
  }

  // Checkout link not configured yet: be honest, no simulated purchase.
  return (
    <Button
      type="button"
      variant="cta"
      size={size}
      className={cn("whitespace-normal text-center", className)}
      onClick={() => {
        trackEvent("CtaClick", { ...eventParams, checkout_ready: false });
        toast("Link de compra em breve", {
          description: "O pagamento ainda não está disponível nesta página. Volte em breve!",
        });
      }}
    >
      {showIcon && <ShoppingBag />}
      {label}
    </Button>
  );
}
