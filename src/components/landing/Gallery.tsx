import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SAMPLE_PAGES, type ProductImage } from "@/lib/product-images";
import { ProductVisual } from "./ProductVisual";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [open, setOpen] = useState<ProductImage | null>(null);
  const allReal = SAMPLE_PAGES.every((p) => p.src);

  return (
    <section id="amostras" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Veja por dentro" title="Conheça as páginas do kit" tone="berry">
          Atividades com visual limpo, letras grandes e enunciados simples, pensadas para a criança entender o que
          fazer e se concentrar no que importa.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {SAMPLE_PAGES.map((page) => (
            <button
              key={page.label}
              type="button"
              onClick={() => setOpen(page)}
              className="group rounded-2xl bg-muted p-3 text-left transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-5"
              aria-label={`Ampliar: ${page.label}`}
            >
              <ProductVisual image={page} />
              <span className="mt-3 flex items-center justify-between gap-2 font-display text-sm font-semibold text-foreground sm:text-base">
                {page.label}
                <ZoomIn className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </span>
            </button>
          ))}
        </div>
        {!allReal && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Prévias ilustrativas. As páginas reais do kit serão exibidas aqui.
          </p>
        )}
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-md rounded-3xl bg-muted p-5 sm:max-w-lg">
          <DialogTitle className="font-display text-lg">{open?.label}</DialogTitle>
          <DialogDescription className="sr-only">Visualização ampliada da página</DialogDescription>
          {open && <ProductVisual image={open} eager />}
        </DialogContent>
      </Dialog>
    </section>
  );
}
