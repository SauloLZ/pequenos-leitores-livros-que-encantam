import { CreditCard, Download, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  { icon: CreditCard, title: "Faça a compra", text: "Finalize o pagamento na página segura de checkout.", tone: "bg-berry text-cta-foreground" },
  { icon: Download, title: "Acesse os PDFs", text: "Após a confirmação do pagamento, você recebe as instruções de acesso no e-mail informado.", tone: "bg-sky text-primary-foreground" },
  { icon: Printer, title: "Imprima e use", text: "Imprima em folha A4 as atividades que quiser usar e comece no ritmo da criança.", tone: "bg-leaf text-foreground" },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-sky-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Como funciona" title="Simples em 3 passos" tone="berry" />
        <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text, tone }, i) => (
            <li key={title} className="relative rounded-3xl bg-card p-7 text-center shadow-soft">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-0.5 font-display text-xs font-bold text-background">
                Passo {i + 1}
              </span>
              <span className={cn("mx-auto flex size-16 items-center justify-center rounded-3xl", tone)}>
                <Icon className="size-7" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
