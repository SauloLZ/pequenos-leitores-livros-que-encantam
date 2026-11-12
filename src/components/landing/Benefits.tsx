import { Footprints, Palette, Printer, Route, Smile, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const BENEFITS = [
  { icon: Route, title: "Sequência organizada", text: "Os módulos seguem uma progressão: das letras aos sons, das sílabas às palavras e às primeiras leituras.", tone: "bg-sky-soft text-sky-ink" },
  { icon: Smile, title: "Aprender brincando", text: "Atividades de cobrir, ligar, pintar e montar que deixam a prática mais leve e convidativa.", tone: "bg-sun-soft text-sun-ink" },
  { icon: Printer, title: "Pronto para imprimir", text: "Arquivos em PDF no tamanho A4. Basta baixar, imprimir e usar — em casa ou na sala de aula.", tone: "bg-berry-soft text-berry-ink" },
  { icon: Users, title: "Para casa e escola", text: "Linguagem acessível para famílias e estrutura prática para professores planejarem a rotina.", tone: "bg-leaf-soft text-leaf-ink" },
  { icon: Footprints, title: "No ritmo da criança", text: "Você escolhe por onde começar e quanto tempo dedicar a cada módulo, respeitando o momento de cada um.", tone: "bg-sky-soft text-sky-ink" },
  { icon: Palette, title: "Visual que não cansa", text: "Páginas limpas, com espaço para escrever e poucas distrações, para a atenção ficar na atividade.", tone: "bg-berry-soft text-berry-ink" },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Por que usar" title="Mais prática, menos improviso" tone="leaf">
          Tenha em mãos um material organizado para os momentos de estudo — sem precisar procurar atividades soltas.
        </SectionHeading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, text, tone }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className={cn("flex size-12 items-center justify-center rounded-2xl", tone)}>
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
