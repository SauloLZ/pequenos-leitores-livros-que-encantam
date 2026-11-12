import { cn } from "@/lib/utils";

export function StarShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("fill-current", className)}>
      <path d="M12 2.5c.4 0 .8.3 1 .7l2.3 4.8 5.2.7c.9.1 1.3 1.2.6 1.8l-3.8 3.7.9 5.2c.2.9-.8 1.6-1.6 1.2L12 18.1l-4.6 2.5c-.8.4-1.8-.3-1.6-1.2l.9-5.2L2.9 10.5c-.7-.6-.3-1.7.6-1.8l5.2-.7L11 3.2c.2-.4.6-.7 1-.7Z" />
    </svg>
  );
}

export function PencilShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" aria-hidden="true" className={className}>
      <rect x="18" y="3" width="84" height="18" rx="3" className="fill-sun" />
      <rect x="18" y="3" width="84" height="6" rx="3" className="fill-sun-soft" opacity="0.7" />
      <rect x="102" y="3" width="14" height="18" rx="4" className="fill-berry" />
      <rect x="98" y="3" width="6" height="18" className="fill-muted-foreground" opacity="0.35" />
      <path d="M18 3 L2 12 L18 21 Z" className="fill-sun-soft" />
      <path d="M7 9.2 L2 12 L7 14.8 Z" className="fill-foreground" />
    </svg>
  );
}

export function BookShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" className={className}>
      <path d="M32 10 C24 4 12 4 4 7 V43 C12 40 24 40 32 46 Z" className="fill-sky" />
      <path d="M32 10 C40 4 52 4 60 7 V43 C52 40 40 40 32 46 Z" className="fill-leaf" />
      <path d="M32 10 V46" className="stroke-paper" strokeWidth="2" />
      <path d="M10 15 H24 M10 21 H24 M40 15 H54 M40 21 H54" className="stroke-paper" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

const letterTones = {
  sky: "bg-sky-soft text-sky-ink",
  sun: "bg-sun-soft text-sun-ink",
  berry: "bg-berry-soft text-berry-ink",
  leaf: "bg-leaf-soft text-leaf-ink",
} as const;

export function LetterBlock({
  letter,
  tone,
  className,
}: {
  letter: string;
  tone: keyof typeof letterTones;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-2xl font-display text-2xl font-bold shadow-soft",
        letterTones[tone],
        className,
      )}
    >
      {letter}
    </span>
  );
}

export function Wave({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" className={cn("block w-full", className)}>
      <path d="M0 30 C 240 60 480 0 720 30 C 960 60 1200 0 1440 30 V60 H0 Z" className="fill-current" />
    </svg>
  );
}
