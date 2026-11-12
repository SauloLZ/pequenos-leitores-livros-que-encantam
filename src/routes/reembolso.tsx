import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, PendingNotice } from "@/components/landing/LegalPage";

const TITLE = "Política de reembolso | Pequenos Leitores";
const DESCRIPTION = "Condições de cancelamento e reembolso do Pequenos Leitores — Kit de Alfabetização.";

export const Route = createFileRoute("/reembolso")({
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
    <LegalPage title="Política de reembolso">
      <PendingNotice />
      <h2>Prazo para solicitação</h2>
      <p>Descreva aqui o prazo e as condições de reembolso. Pelo Código de Defesa do Consumidor, compras feitas pela internet podem ser canceladas em até 7 dias após a compra.</p>
      <h2>Como solicitar</h2>
      <p>Informe aqui o canal para solicitar o reembolso.</p>
    </LegalPage>
  );
}
