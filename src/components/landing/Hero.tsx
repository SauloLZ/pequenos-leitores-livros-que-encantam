import { Check, FileText, Printer } from "lucide-react";
import { PRODUCT } from "@/lib/config";
import { formatBRL } from "@/lib/checkout";
import { KIT_MODULES, modulePage } from "@/lib/modules";
import { COVER_IMAGE } from "@/lib/product-images";
import { CtaButton } from "./CtaButton";
import { LetterBlock, PencilShape, StarShape } from "./Decorations";
import { ProductVisual } from "./ProductVisual";

const POINTS = ["200 atividades", "12 módulos organizados", "PDFs para imprimir", "Acesso digital após a compra"];

const [first, , , fourth] = KIT_MODULES;
const LEFT = first ? modulePage(first) : COVER_IMAGE;
const RIGHT = fourth ? modulePage(fourth) : COVER_IMAGE;

export function Hero() {
  const hasRealImages = Boolean(COVER_IMAGE.src);
  return (
    <section className="relative overflow-hidden bg-dots">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 md:pb-24 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-sun-soft px-4 py-1.5 font-display text-sm font-semibold text-sun-ink">
            <StarShape className="size-4 text-sun" />
            {PRODUCT.fullName}
          </span>
          <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
            <span className="text-sky-ink">200 atividades</span> para apoiar a alfabetização de forma{" "}
            <span className="relative inline-block text-berry-ink">
              divertida!
              <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                <path d="M2 8 C 50 2 150 2 198 8" className="stroke-sun" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Ajude a tornar os momentos de aprendizagem mais leves com atividades ilustradas, organizadas e prontas para
            imprimir.
          </p>

          <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-x-3 gap-y-2.5 text-left sm:max-w-xl lg:mx-0">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-semibold leading-tight text-foreground sm:text-base">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-leaf-ink">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <div className="text-center sm:text-left">
              <p className="font-display text-3xl font-bold leading-none text-foreground">{formatBRL(PRODUCT.price)}</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">pagamento único · produto digital</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div className="absolute inset-6 -z-0 rounded-[3rem] bg-sky-soft" aria-hidden="true" />
          <div className="relative grid grid-cols-[1fr_1.4fr_1fr] items-end gap-2 px-1 pt-8 sm:gap-4">
            <ProductVisual image={LEFT} className="-rotate-6 translate-y-6" sizes="150px" />
            <ProductVisual image={COVER_IMAGE} eager className="z-10" sizes="(min-width: 1024px) 240px, 40vw" />
            <ProductVisual image={RIGHT} className="rotate-6 translate-y-6" sizes="150px" />
          </div>
          <LetterBlock letter="A" tone="berry" className="absolute -left-2 top-4 animate-float [--r:-10deg]" />
          <LetterBlock letter="b" tone="leaf" className="absolute -right-1 top-16 animate-float [--r:8deg] [animation-delay:1.2s]" />
          <StarShape className="absolute left-1/2 -top-2 size-8 animate-twinkle text-sun" />
          <PencilShape className="absolute -bottom-6 right-4 w-32 -rotate-6 sm:w-44" />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground">
            <span className="flex items-center gap-1.5"><FileText className="size-4 text-sky-ink" /> PDF A4</span>
            <span className="flex items-center gap-1.5"><Printer className="size-4 text-berry-ink" /> Imprima em casa ou na escola</span>
          </div>
          {!hasRealImages && (
            <p className="mt-2 text-center text-[0.7rem] text-muted-foreground/80">Imagens ilustrativas</p>
          )}
        </div>
      </div>
    </section>
  );
}
