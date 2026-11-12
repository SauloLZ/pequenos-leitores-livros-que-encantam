import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader withNav={false} />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-ink hover:underline">
          <ArrowLeft className="size-4" /> Voltar para a página inicial
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6 leading-relaxed text-muted-foreground sm:p-8 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function PendingNotice() {
  return (
    <p className="rounded-2xl bg-sun-soft p-4 text-sm font-semibold text-sun-ink">
      Este documento está em elaboração e será publicado em breve.
    </p>
  );
}
