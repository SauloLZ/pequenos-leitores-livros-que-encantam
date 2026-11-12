/**
 * Real product images go here. Upload the cover and sample pages, then set `src`.
 * While `src` is null, the page shows an illustrated preview marked as "ilustrativa".
 */
export type MockKind = "cover" | "tracing" | "syllables" | "match" | "words" | "reading" | "writing";

export interface ProductImage {
  src: string | null;
  alt: string;
  label: string;
  mock: MockKind;
}

export const COVER_IMAGE: ProductImage = {
  src: null,
  alt: "Capa do Pequenos Leitores — Kit de Alfabetização",
  label: "Capa do kit",
  mock: "cover",
};

export const SAMPLE_PAGES: ProductImage[] = [
  { src: null, alt: "Página de atividade de reconhecimento de letras", label: "Reconhecimento de letras", mock: "tracing" },
  { src: null, alt: "Página de atividade com sílabas", label: "Sílabas", mock: "syllables" },
  { src: null, alt: "Página de atividade de consciência fonológica", label: "Consciência fonológica", mock: "match" },
  { src: null, alt: "Página de atividade de formação de palavras", label: "Formação de palavras", mock: "words" },
  { src: null, alt: "Página de atividade de leitura inicial", label: "Leitura inicial", mock: "reading" },
  { src: null, alt: "Página de atividade de escrita guiada", label: "Escrita guiada", mock: "writing" },
];
