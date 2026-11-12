import { HeartHandshake, LayoutGrid, Printer, Smile, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

const BENEFITS = [
  { icon: TrendingUp, title: "Atividades progressivas", text: "Das letras e vogais às sílabas, palavras, frases e pequenos textos — um passo de cada vez.", tone: "bg-sky-soft text-sky-ink" },
  { icon: Smile, title: "Aprender brincando", text: "Exercícios lúdicos de pintar, circular, ligar, contar e completar, que deixam a prática mais leve.", tone: "bg-sun-soft text-sun-ink" },
  { icon: Printer, title: "Pronto para imprimir", text: "Arquivos em PDF no tamanho A4. Basta baixar, imprimir as páginas que quiser e usar.", tone: "bg-berry-soft text-berry-ink" },
  { icon: HeartHandshake, title: "Apoio para pais e professores", text: "Enunciados simples para usar em casa e estrutura prática para planejar a rotina da turma.", tone: "bg-leaf-soft text-leaf-ink" },
  { icon: LayoutGrid, title: "Organizado por módulos", text: "12 módulos com tema definido, para você escolher por onde começar e acompanhar o caminho.", tone: "bg-sky-soft text-sky-ink" },
];

export function Benefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Por que usar" title="Mais prática, menos improviso" tone="leaf">
          Tenha em mãos um material organizado para os momentos de estudo, sem precisar procurar atividades soltas.
        </SectionHeading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, text, tone }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className={cn("flex size-12 items-center justify-center rounded-2xl", tone)}>
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
          <article className="flex flex-col justify-center rounded-3xl border-2 border-dashed border-berry bg-berry-soft p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground">Tudo em um só kit</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">200 atividades, pagamento único.</p>
            <CtaButton location="benefits" size="lg" className="mt-5 w-full" />
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Cada criança aprende no seu tempo. O kit apoia a prática e não substitui o acompanhamento pedagógico.
        </p>
      </div>
    </section>
  );
}
