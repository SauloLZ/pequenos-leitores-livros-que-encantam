import { Check, Printer, FileText } from "lucide-react";
import { PRODUCT } from "@/lib/config";
import { formatBRL } from "@/lib/checkout";
import { COVER_IMAGE, SAMPLE_PAGES } from "@/lib/product-images";
import { CtaButton } from "./CtaButton";
import { LetterBlock, PencilShape, StarShape } from "./Decorations";
import { ProductVisual } from "./ProductVisual";

const POINTS = ["200 atividades originais", "12 módulos em sequência", "PDF A4 pronto para imprimir"];

export function Hero() {
  const hasRealImages = Boolean(COVER_IMAGE.src);
  const [left = COVER_IMAGE, right = COVER_IMAGE] = SAMPLE_PAGES;
  return (
    <section className="relative overflow-hidden bg-dots">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-sun-soft px-4 py-1.5 font-display text-sm font-semibold text-sun-ink">
            <StarShape className="size-4 text-sun" />
            {PRODUCT.fullName}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.6rem]">
            <span className="text-sky-ink">200 atividades</span> para apoiar a alfabetização de forma{" "}
            <span className="relative inline-block text-berry-ink">
              divertida
              <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                <path d="M2 8 C 50 2 150 2 198 8" className="stroke-sun" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Um kit digital para pais, responsáveis e professores acompanharem a criança das primeiras letras à
            leitura inicial — com atividades organizadas, guia de aplicação e tudo pronto para imprimir.
          </p>

          <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2 lg:mx-0 lg:justify-start">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <span className="flex size-5 items-center justify-center rounded-full bg-leaf-soft text-leaf-ink">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <CtaButton location="hero" />
            <div className="text-center sm:text-left">
              <p className="font-display text-3xl font-bold leading-none text-foreground">{formatBRL(PRODUCT.price)}</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">pagamento único · produto digital</p>
            </div>
          </div>
        </div>

        {/* Mockup — real cover/samples replace the illustrations via product-images.ts */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-6 -z-0 rounded-[3rem] bg-sky-soft" aria-hidden="true" />
          <div className="relative grid grid-cols-[1fr_1.3fr_1fr] items-end gap-3 px-2 pt-8 sm:gap-4">
            <ProductVisual image={left} className="-rotate-6 translate-y-6" />
            <ProductVisual image={COVER_IMAGE} eager className="z-10" />
            <ProductVisual image={right} className="rotate-6 translate-y-6" />
          </div>
          <LetterBlock letter="A" tone="berry" className="absolute -left-2 top-4 animate-float [--r:-10deg]" />
          <LetterBlock letter="b" tone="leaf" className="absolute -right-1 top-16 animate-float [--r:8deg] [animation-delay:1.2s]" />
          <StarShape className="absolute left-1/2 -top-2 size-8 animate-twinkle text-sun" />
          <PencilShape className="absolute -bottom-6 right-4 w-36 -rotate-6 sm:w-44" />
          <div className="mt-12 flex items-center justify-center gap-4 text-xs font-semibold text-muted-foreground">
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
