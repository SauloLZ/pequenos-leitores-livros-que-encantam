import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { CtaButton } from "./CtaButton";

const NAV = [
  { href: "#amostras", label: "Amostras" },
  { href: "#modulos", label: "Módulos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Pequenos Leitores — início">
      <span className="flex size-10 items-center justify-center rounded-2xl bg-sky text-primary-foreground shadow-soft">
        <BookOpen className="size-5" />
      </span>
      <span className="font-display text-lg font-bold leading-none text-foreground">
        Pequenos <span className="text-berry-ink">Leitores</span>
      </span>
    </Link>
  );
}

export function SiteHeader({ withNav = true }: { withNav?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        {withNav && (
          <>
            <nav className="hidden items-center gap-7 md:flex" aria-label="Seções da página">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="font-display text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {n.label}
                </a>
              ))}
            </nav>
            <CtaButton location="header" label="Comprar" size="pill" className="hidden sm:inline-flex" showIcon={false} />
          </>
        )}
      </div>
    </header>
  );
}
