import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

/** Module list — adjust titles/descriptions to match the final product. */
const MODULES = [
  { title: "Conhecendo as letras", text: "Reconhecimento visual do alfabeto." },
  { title: "Vogais", text: "Identificar, cobrir e nomear as vogais." },
  { title: "Consoantes", text: "Letras e seus sons, uma de cada vez." },
  { title: "Sons e rimas", text: "Consciência fonológica com brincadeiras de som." },
  { title: "Sílabas simples", text: "Juntar consoante e vogal: BA, BE, BI…" },
  { title: "Famílias silábicas", text: "Explorar as famílias e perceber padrões." },
  { title: "Formação de palavras", text: "Montar palavras com sílabas e letras." },
  { title: "Palavras e imagens", text: "Relacionar palavras escritas a figuras." },
  { title: "Leitura de palavras", text: "Primeiras leituras com apoio visual." },
  { title: "Frases curtas", text: "Ler e compreender pequenas frases." },
  { title: "Escrita guiada", text: "Traçado e escrita com linhas de apoio." },
  { title: "Revisão", text: "Retomar e consolidar o que foi praticado." },
];

const TONES = [
  "bg-sky-soft text-sky-ink",
  "bg-sun-soft text-sun-ink",
  "bg-berry-soft text-berry-ink",
  "bg-leaf-soft text-leaf-ink",
];

export function Modules() {
  return (
    <section id="modulos" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="12 módulos" title="Um caminho, passo a passo" tone="sun">
          As 200 atividades estão divididas em 12 módulos, do reconhecimento das letras à escrita guiada.
        </SectionHeading>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => (
            <li key={m.title} className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
              <span className={cn("flex size-12 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-bold", TONES[i % 4])}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-foreground">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
