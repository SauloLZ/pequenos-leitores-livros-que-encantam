import {
  ALargeSmall,
  AudioLines,
  BookOpen,
  BookText,
  Link2,
  MessageCircleQuestion,
  Music,
  PencilLine,
  Puzzle,
  RotateCcw,
  Shapes,
  Type,
  type LucideIcon,
} from "lucide-react";
import { KIT_MODULES, activityCount } from "@/lib/modules";
import { cn } from "@/lib/utils";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

const ICONS: LucideIcon[] = [ALargeSmall, Music, Puzzle, Link2, BookOpen, Type, AudioLines, Shapes, MessageCircleQuestion, BookText, PencilLine, RotateCcw];

const TONES = [
  { card: "bg-sky-soft", badge: "bg-sky text-primary-foreground", ink: "text-sky-ink" },
  { card: "bg-sun-soft", badge: "bg-sun text-foreground", ink: "text-sun-ink" },
  { card: "bg-berry-soft", badge: "bg-berry text-cta-foreground", ink: "text-berry-ink" },
  { card: "bg-leaf-soft", badge: "bg-leaf text-foreground", ink: "text-leaf-ink" },
];

const DEFAULT_TONE = { card: "bg-sky-soft", badge: "bg-sky text-primary-foreground", ink: "text-sky-ink" };

export function Modules() {
  return (
    <section id="modulos" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Conteúdo do kit" title="12 módulos, um caminho passo a passo" tone="sun">
          As 200 atividades estão distribuídas em 12 módulos, das letras e vogais até a revisão final.
        </SectionHeading>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KIT_MODULES.map((m, i) => {
            const Icon = ICONS[i] ?? BookOpen;
            const tone = TONES[i % TONES.length] ?? DEFAULT_TONE;
            return (
              <li key={m.number} className={cn("flex flex-col rounded-3xl p-5", tone.card)}>
                <div className="flex items-center gap-3">
                  <span className={cn("flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-soft", tone.badge)}>
                    <Icon className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <p className={cn("font-display text-xs font-bold uppercase tracking-wider", tone.ink)}>
                      Módulo {String(m.number).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{m.title}</h3>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                <p className="mt-4 inline-flex w-fit rounded-full bg-card px-3 py-1 font-display text-xs font-semibold text-foreground">
                  {activityCount(m)} atividades · nº {m.firstActivity} a {m.lastActivity}
                </p>
              </li>
            );
          })}
        </ol>
        <div className="mt-12 flex justify-center">
          <CtaButton location="modules" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
