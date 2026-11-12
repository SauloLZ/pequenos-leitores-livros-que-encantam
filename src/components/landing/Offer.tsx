import { Check, Info } from "lucide-react";
import { PRODUCT } from "@/lib/config";
import { formatBRL } from "@/lib/checkout";
import { COVER_IMAGE } from "@/lib/product-images";
import { CtaButton } from "./CtaButton";
import { StarShape } from "./Decorations";
import { ProductVisual } from "./ProductVisual";

const LIST = [
  "200 atividades originais em PDF A4",
  "12 módulos em sequência",
  "Guia de aplicação",
  "Gabaritos (conforme aplicável)",
];

export function Offer() {
  return (
    <section id="oferta" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-sun bg-sun-soft p-6 sm:p-10 md:p-14">
          <StarShape className="absolute right-8 top-8 size-10 animate-twinkle text-sun" />
          <StarShape className="absolute bottom-10 left-6 size-6 animate-twinkle text-berry [animation-delay:1s]" />
          <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <ProductVisual image={COVER_IMAGE} className="mx-auto w-3/5 -rotate-3 md:w-full" />
            <div className="text-center md:text-left">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-sun-ink">Oferta</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{PRODUCT.fullName}</h2>
              <ul className="mx-auto mt-6 max-w-sm space-y-2.5 text-left md:mx-0">
                {LIST.map((l) => (
                  <li key={l} className="flex items-center gap-2.5 font-semibold text-foreground">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-leaf text-foreground">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-sm font-semibold text-muted-foreground">Pagamento único</p>
                <p className="font-display text-5xl font-bold text-foreground sm:text-6xl">{formatBRL(PRODUCT.price)}</p>
              </div>
              <CtaButton location="offer" className="mt-6 w-full sm:w-auto" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-border bg-card p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-sky-ink" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Material complementar.</strong> O kit é um apoio para a prática em
            casa ou na escola e não substitui o acompanhamento pedagógico. Cada criança tem seu próprio tempo de
            aprendizagem; em caso de dúvidas sobre o desenvolvimento, converse com o professor ou um profissional
            especializado.
          </p>
        </div>
      </div>
    </section>
  );
}
