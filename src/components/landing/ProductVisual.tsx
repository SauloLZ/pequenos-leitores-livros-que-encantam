import type { ProductImage } from "@/lib/product-images";
import { cn } from "@/lib/utils";
import { WorksheetMock } from "./WorksheetMock";

/** Shows the real image when provided, otherwise an illustrated preview. */
export function ProductVisual({
  image,
  className,
  eager = false,
}: {
  image: ProductImage;
  className?: string;
  eager?: boolean;
}) {
  if (image.src) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("aspect-[1/1.414] w-full rounded-xl border border-border bg-paper object-cover shadow-paper", className)}
      />
    );
  }
  return (
    <div role="img" aria-label={`${image.alt} (prévia ilustrativa)`} className={className}>
      <WorksheetMock kind={image.mock} />
    </div>
  );
}
