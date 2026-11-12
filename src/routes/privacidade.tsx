import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, PendingNotice } from "@/components/landing/LegalPage";

const TITLE = "Política de privacidade | Pequenos Leitores";
const DESCRIPTION = "Como os dados pessoais são tratados no Pequenos Leitores — Kit de Alfabetização.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage title="Política de privacidade">
      <PendingNotice />
      <h2>Quais dados coletamos</h2>
      <p>Descreva aqui os dados coletados (por exemplo, nome e e-mail informados na compra) e a finalidade.</p>
      <h2>Ferramentas de medição</h2>
      <p>Informe aqui se a página utiliza ferramentas como o Meta Pixel para medir visitas e conversões.</p>
      <h2>Seus direitos</h2>
      <p>Explique como o titular pode solicitar acesso, correção ou exclusão dos seus dados, conforme a LGPD.</p>
    </LegalPage>
  );
}
