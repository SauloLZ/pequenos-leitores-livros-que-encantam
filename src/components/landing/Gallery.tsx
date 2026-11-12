import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { KIT_MODULES, modulePage } from "@/lib/modules";
import { VARIETY_IMAGES } from "@/lib/product-images";
import { CtaButton } from "./CtaButton";
import { Lightbox } from "./Lightbox";
import { ProductVisual } from "./ProductVisual";
import { SectionHeading } from "./SectionHeading";

const ITEMS = KIT_MODULES.map((m) => ({ module: m, image: modulePage(m) }));
const PAGES = ITEMS.map((i) => i.image);

export function Gallery() {
  const [page, setPage] = useState<number | null>(null);
  const [variety, setVariety] = useState<number | null>(null);

  return (
    <section id="amostras" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Veja por dentro" title="Veja algumas atividades" tone="berry">
          Uma página de cada módulo, exatamente como está no material. Toque em qualquer página para ampliar.
        </SectionHeading>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {ITEMS.map(({ module: m, image: img }, i) => (
            <li key={img.label}>
              <button
                type="button"
                onClick={() => setPage(i)}
                className="group flex h-full w-full flex-col rounded-2xl bg-muted p-2.5 text-left transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-4"
                aria-label={`Ampliar: ${img.label}`}
              >
                <ProductVisual image={img} sizes="(min-width: 1024px) 260px, (min-width: 640px) 30vw, 45vw" />
                <span className="mt-2.5 flex items-start justify-between gap-2">
                  <span>
                    <span className="block font-display text-xs font-semibold uppercase tracking-wide text-berry-ink">
                      Módulo {m.number}
                    </span>
                    <span className="block font-display text-sm font-semibold leading-snug text-foreground sm:text-base">
                      {m.sample}
                    </span>
                  </span>
                  <ZoomIn className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-16 md:mt-20">
          <SectionHeading eyebrow="Variedade" title="Atividades diferentes em cada módulo" tone="sky">
            Pintar, circular, ligar, completar, contar, ler e escrever: veja lado a lado uma página de cada um dos 12
            módulos.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {VARIETY_IMAGES.map((img, i) => (
              <button
                key={img.label}
                type="button"
                onClick={() => setVariety(i)}
                className="group overflow-hidden rounded-3xl border border-border bg-card p-3 text-left shadow-soft transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Ampliar: ${img.label}`}
              >
                <img
                  src={img.src ?? undefined}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 560px, 92vw"
                  className="aspect-[1400/1140] w-full rounded-2xl object-cover"
                />
                <span className="mt-3 flex items-center justify-between px-1 font-display text-sm font-semibold text-foreground sm:text-base">
                  {img.label}
                  <ZoomIn className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton location="gallery" className="w-full sm:w-auto" />
        </div>
      </div>

      <Lightbox images={PAGES} index={page} onIndexChange={setPage} />
      <Lightbox images={VARIETY_IMAGES} index={variety} onIndexChange={setVariety} wide />
    </section>
  );
}
