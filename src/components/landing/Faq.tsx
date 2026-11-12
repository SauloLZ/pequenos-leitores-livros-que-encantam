import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT } from "@/lib/config";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

const supportAnswer = CONTACT.email
  ? `Escreva para ${CONTACT.email}${CONTACT.whatsapp ? ` ou chame no WhatsApp ${CONTACT.whatsapp}` : ""}. Informe o e-mail usado na compra para agilizar o atendimento.`
  : "Use os canais de contato indicados no rodapé desta página. Informe o e-mail usado na compra para agilizar o atendimento.";

const FAQ = [
  {
    q: "Como recebo os arquivos?",
    a: "O kit é 100% digital. Após a confirmação do pagamento, você recebe no e-mail informado na compra as instruções para acessar e baixar os PDFs. Se não encontrar a mensagem, confira também as pastas de spam e promoções.",
  },
  {
    q: "Como imprimir as atividades?",
    a: "Os arquivos estão no tamanho A4 e podem ser impressos em impressora comum, em casa, na escola ou em uma gráfica. Você pode imprimir só as páginas que for usar, no seu ritmo. Se preferir, também dá para visualizar os PDFs na tela.",
  },
  {
    q: "Para qual etapa da alfabetização o material é indicado?",
    a: "Para crianças em fase inicial de alfabetização: que estão conhecendo as letras e os sons e começando a ler e escrever as primeiras palavras e frases. Mais do que a idade, vale observar o momento da criança e escolher os módulos mais adequados.",
  },
  {
    q: "Posso usar em casa e na escola?",
    a: "Sim. O material foi pensado para pais, responsáveis e professores, e funciona tanto na rotina de casa quanto em sala de aula. As condições de uso e de compartilhamento dos arquivos estão nos Termos de Uso.",
  },
  {
    q: "Quais arquivos estão incluídos?",
    a: "Você recebe as 200 atividades em PDF A4, divididas em 12 módulos, o guia de aplicação e os gabaritos das atividades em que eles se aplicam.",
  },
  {
    q: "Como solicitar suporte?",
    a: supportAnswer,
  },
  {
    q: "O kit substitui a escola ou um profissional?",
    a: "Não. O kit é um material complementar e não substitui o acompanhamento pedagógico. Ele apoia a prática, mas cada criança aprende no seu tempo e não há garantia de resultado específico.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas e respostas" tone="leaf" />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQ.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="rounded-2xl border border-border bg-background px-5">
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Leve as 200 atividades para a rotina da criança
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          12 módulos organizados, em PDF para imprimir. Pagamento único, acesso digital após a compra.
        </p>
        <CtaButton location="final" className="mt-8 w-full sm:w-auto" />
      </div>
    </section>
  );
}
