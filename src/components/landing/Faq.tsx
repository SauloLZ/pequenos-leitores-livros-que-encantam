import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const FAQ = [
  {
    q: "Em que formato o material é entregue?",
    a: "O kit é um produto 100% digital. As atividades são arquivos em PDF no tamanho A4, acompanhados do guia de aplicação e dos gabaritos nas atividades em que se aplicam. Nenhum item físico é enviado.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, as instruções de acesso aos arquivos são enviadas para o e-mail informado na compra. Confira também a caixa de spam ou promoções.",
  },
  {
    q: "Para qual fase de aprendizagem o kit é indicado?",
    a: "Para crianças em fase inicial de alfabetização — que estão conhecendo as letras, os sons e começando a ler e escrever as primeiras palavras. Mais do que a idade, vale observar o momento da criança e escolher os módulos mais adequados.",
  },
  {
    q: "Preciso imprimir tudo de uma vez?",
    a: "Não. Você pode imprimir apenas as páginas que for usar, em impressora comum, em folha A4. Se preferir, também é possível visualizar os arquivos na tela.",
  },
  {
    q: "Posso usar com meus alunos?",
    a: "O material foi pensado para pais, responsáveis e professores. As condições de uso — incluindo uso em sala de aula e compartilhamento dos arquivos — estão descritas nos Termos de Uso.",
  },
  {
    q: "Como usar as atividades no dia a dia?",
    a: "O guia de aplicação traz orientações para conduzir as atividades. Uma sugestão é fazer sessões curtas, com calma, seguindo a ordem dos módulos e voltando aos anteriores sempre que necessário.",
  },
  {
    q: "O kit substitui a escola ou um profissional?",
    a: "Não. O kit é um material complementar e não substitui o acompanhamento pedagógico. Ele apoia a prática, mas cada criança aprende no seu tempo e não há garantia de resultado específico.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas e respostas" tone="leaf" />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQ.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="rounded-2xl border border-border bg-background px-5">
              <AccordionTrigger className="py-5 font-display text-base font-semibold text-foreground hover:no-underline sm:text-lg">
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
