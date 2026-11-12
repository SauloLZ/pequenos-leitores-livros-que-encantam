import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { ProductImage } from "@/lib/product-images";
import { cn } from "@/lib/utils";

/** Enlarged view for a list of images, with previous/next navigation. */
export function Lightbox({
  images,
  index,
  onIndexChange,
  wide = false,
}: {
  images: ProductImage[];
  index: number | null;
  onIndexChange: (i: number | null) => void;
  wide?: boolean;
}) {
  const current = index === null ? null : images[index];
  const many = images.length > 1;
  const go = (step: number) => {
    if (index === null) return;
    onIndexChange((index + step + images.length) % images.length);
  };

  return (
    <Dialog open={!!current} onOpenChange={(o) => !o && onIndexChange(null)}>
      <DialogContent
        className={cn(
          "max-h-[94dvh] w-[calc(100vw-1.5rem)] gap-3 overflow-y-auto rounded-3xl bg-muted p-4 sm:p-6",
          wide ? "max-w-5xl" : "max-w-xl",
        )}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <DialogTitle className="pr-8 font-display text-base sm:text-lg">{current?.label}</DialogTitle>
        <DialogDescription className="sr-only">Visualização ampliada da imagem do kit</DialogDescription>
        {current?.src && (
          <img
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            decoding="async"
            className="mx-auto max-h-[72dvh] w-auto max-w-full rounded-xl border border-border bg-paper object-contain shadow-paper"
          />
        )}
        {many && index !== null && (
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="size-5" />
            </button>
            <span className="font-display text-sm font-semibold text-muted-foreground">
              {index + 1} de {images.length}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
