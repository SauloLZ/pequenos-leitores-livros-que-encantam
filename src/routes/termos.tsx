import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, PendingNotice } from "@/components/landing/LegalPage";

const TITLE = "Termos de uso | Pequenos Leitores";
const DESCRIPTION = "Condições de uso do Pequenos Leitores — Kit de Alfabetização.";

export const Route = createFileRoute("/termos")({
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
    <LegalPage title="Termos de uso">
      <PendingNotice />
      <h2>Licença de uso</h2>
      <p>Descreva aqui como os arquivos podem ser utilizados (uso familiar, uso em sala de aula) e o que não é permitido, como revenda ou redistribuição.</p>
      <h2>Natureza do material</h2>
      <p>O kit é um material complementar de apoio à alfabetização e não substitui o acompanhamento pedagógico.</p>
    </LegalPage>
  );
}
