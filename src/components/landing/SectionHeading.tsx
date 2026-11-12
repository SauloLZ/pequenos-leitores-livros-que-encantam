import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  sky: "bg-sky-soft text-sky-ink",
  sun: "bg-sun-soft text-sun-ink",
  berry: "bg-berry-soft text-berry-ink",
  leaf: "bg-leaf-soft text-leaf-ink",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "sky",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <span className={cn("inline-block rounded-full px-4 py-1 font-display text-sm font-semibold", tones[tone])}>
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}
