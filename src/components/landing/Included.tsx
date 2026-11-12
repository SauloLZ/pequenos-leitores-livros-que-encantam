import { BookMarked, CheckCircle2, FileText, Layers, ListChecks, MonitorSmartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  { icon: FileText, title: "200 atividades", text: "Em arquivos PDF no formato A4, prontos para impressão." },
  { icon: Layers, title: "12 módulos organizados", text: "Separados por etapa para facilitar o planejamento." },
  { icon: BookMarked, title: "Guia de aplicação", text: "Orientações para conduzir as atividades com a criança." },
  { icon: ListChecks, title: "Gabaritos", text: "Respostas de referência para as atividades em que se aplicam." },
  { icon: MonitorSmartphone, title: "Acesso digital", text: "Produto 100% digital, com acesso aos arquivos após a confirmação do pagamento." },
];

export function Included() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="O que você recebe" title="Tudo o que está incluído" tone="sky" className="lg:mx-0 lg:text-left">
            Um pacote digital completo, com tudo organizado para você começar.
          </SectionHeading>
        </div>
        <ul className="space-y-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon className="size-5" />
              </span>
              <div className="flex-1">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  {title}
                  <CheckCircle2 className="size-4 text-leaf-ink" />
                </h3>
                <p className="mt-1 text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
