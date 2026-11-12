import type { MockKind } from "@/lib/product-images";
import { cn } from "@/lib/utils";
import { StarShape, BookShape, PencilShape } from "./Decorations";

/** Illustrated A4 page used until real product images are added. */
export function WorksheetMock({ kind, className }: { kind: MockKind; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[1/1.414] w-full overflow-hidden rounded-xl border border-border bg-paper p-[7%] shadow-paper",
        className,
      )}
      aria-hidden="true"
    >
      {kind === "cover" ? <Cover /> : <Page kind={kind} />}
    </div>
  );
}

function Header({ title, tone }: { title: string; tone: string }) {
  return (
    <div className="mb-[8%]">
      <div className={cn("rounded-full px-3 py-1 text-center font-display text-[0.7rem] font-semibold sm:text-xs", tone)}>
        {title}
      </div>
      <div className="mt-2 flex gap-2">
        <div className="h-1.5 flex-1 rounded-full bg-muted" />
        <div className="h-1.5 w-1/4 rounded-full bg-muted" />
      </div>
    </div>
  );
}

function Page({ kind }: { kind: Exclude<MockKind, "cover"> }) {
  switch (kind) {
    case "tracing":
      return (
        <>
          <Header title="Cubra a letra" tone="bg-sky-soft text-sky-ink" />
          <div className="flex items-center justify-center gap-3">
            <span className="font-display text-[3.2rem] font-bold leading-none text-sky sm:text-6xl">A</span>
            <span className="font-display text-[3.2rem] font-bold leading-none text-outline-dashed sm:text-6xl">a</span>
          </div>
          <div className="mt-[10%] space-y-3">
            {[0, 1, 2].map((r) => (
              <div key={r} className="flex justify-between border-b-2 border-dashed border-sky/50 pb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="font-display text-xl font-bold text-outline-dashed">A</span>
                ))}
              </div>
            ))}
          </div>
        </>
      );
    case "syllables":
      return (
        <>
          <Header title="Família do B" tone="bg-sun-soft text-sun-ink" />
          <div className="grid grid-cols-3 gap-2">
            {["BA", "BE", "BI", "BO", "BU", "B_"].map((s, i) => (
              <div
                key={s}
                className={cn(
                  "flex aspect-square items-center justify-center rounded-lg font-display text-lg font-bold",
                  i === 5 ? "border-2 border-dashed border-sun" : "bg-sun-soft text-sun-ink",
                )}
              >
                {i === 5 ? "" : s}
              </div>
            ))}
          </div>
          <div className="mt-[10%] space-y-2">
            <div className="h-2 w-full rounded-full bg-muted" />
            <div className="h-2 w-4/5 rounded-full bg-muted" />
          </div>
        </>
      );
    case "match":
      return (
        <>
          <Header title="Ligue os sons" tone="bg-berry-soft text-berry-ink" />
          <div className="space-y-4">
            {(["bg-berry", "bg-leaf", "bg-sky", "bg-sun"] as const).map((c, i) => (
              <div key={c} className="flex items-center justify-between">
                <span className={cn("size-8 rounded-full", c)} />
                <span className="mx-2 h-0 flex-1 border-t-2 border-dotted border-muted-foreground/30" />
                <span className="rounded-md bg-muted px-2 py-0.5 font-display text-xs font-bold text-muted-foreground">
                  {["BO", "PA", "GA", "FO"][i]}
                </span>
              </div>
            ))}
          </div>
        </>
      );
    case "words":
      return (
        <>
          <Header title="Monte a palavra" tone="bg-leaf-soft text-leaf-ink" />
          <BookShape className="mx-auto w-1/2" />
          <div className="mt-[10%] flex justify-center gap-1.5">
            {["L", "I", "V", "R", "O"].map((l) => (
              <span key={l} className="flex size-7 items-center justify-center rounded-md bg-leaf-soft font-display text-sm font-bold text-leaf-ink sm:size-8">
                {l}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="size-7 rounded-md border-2 border-dashed border-leaf sm:size-8" />
            ))}
          </div>
        </>
      );
    case "reading":
      return (
        <>
          <Header title="Leia e pinte" tone="bg-sky-soft text-sky-ink" />
          <div className="space-y-3 font-display text-sm font-semibold text-foreground/80">
            <p>O sapo pula.</p>
            <p>A bola é azul.</p>
            <p>O sol brilha.</p>
          </div>
          <div className="mt-[10%] flex justify-around">
            <StarShape className="size-8 text-sun" />
            <StarShape className="size-8 text-berry" />
            <StarShape className="size-8 text-leaf" />
          </div>
        </>
      );
    case "writing":
      return (
        <>
          <Header title="Escreva com capricho" tone="bg-berry-soft text-berry-ink" />
          <div className="bg-notebook h-[60%] rounded-md border border-border px-2 pt-1 font-display text-lg font-semibold text-outline-dashed">
            casa
          </div>
          <PencilShape className="absolute bottom-[6%] right-[6%] w-1/2 -rotate-12" />
        </>
      );
  }
}

function Cover() {
  return (
    <div className="relative flex h-full flex-col items-center justify-between rounded-lg bg-sky-soft p-[8%] text-center">
      <div className="flex gap-1.5">
        {(["bg-berry", "bg-sun", "bg-leaf", "bg-sky"] as const).map((c, i) => (
          <span key={c} className={cn("flex size-7 items-center justify-center rounded-lg font-display text-sm font-bold text-paper sm:size-8", c)}>
            {"ABCD"[i]}
          </span>
        ))}
      </div>
      <div>
        <p className="font-display text-[1.6rem] font-bold leading-[0.95] text-sky-ink sm:text-3xl">
          Pequenos
          <br />
          Leitores
        </p>
        <p className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-berry-ink">
          Kit de Alfabetização
        </p>
      </div>
      <BookShape className="w-2/5" />
      <div className="rounded-full bg-paper px-3 py-1 font-display text-xs font-bold text-foreground">
        200 atividades · 12 módulos
      </div>
      <StarShape className="absolute right-[8%] top-[22%] size-5 text-sun" />
      <StarShape className="absolute left-[8%] top-[45%] size-4 text-berry" />
    </div>
  );
}
