import { MODULE_PAGES, PAGE_SIZE, type ProductImage } from "./product-images";

/**
 * The 12 modules of the kit. Activity ranges and the sample activity titles come
 * from the real PDF pages; replace `title` with the official module names when available.
 */
export interface KitModule {
  number: number;
  title: string;
  text: string;
  /** Title of the sample activity shown in the gallery (as printed on the page). */
  sample: string;
  firstActivity: number;
  lastActivity: number;
}

export const KIT_MODULES: KitModule[] = [
  { number: 1, title: "Letras e vogais", text: "Reconhecer e escrever as letras, começando pelas vogais.", sample: "Encontre a letra A", firstActivity: 1, lastActivity: 12 },
  { number: 2, title: "Rimas", text: "Ouvir as palavras e descobrir quais rimam entre si.", sample: "Palavras que rimam", firstActivity: 13, lastActivity: 24 },
  { number: 3, title: "Sílabas", text: "Completar palavras com as sílabas de cada família.", sample: "As sílabas do P", firstActivity: 25, lastActivity: 36 },
  { number: 4, title: "Sílabas e palavras", text: "Juntar sílabas e descobrir qual palavra elas formam.", sample: "Ligue sílabas e palavras", firstActivity: 37, lastActivity: 48 },
  { number: 5, title: "Leitura de frases", text: "Ler frases curtas com ajuda e escolher a palavra certa.", sample: "Leia e escolha", firstActivity: 49, lastActivity: 60 },
  { number: 6, title: "Letra inicial", text: "Identificar a letra que começa cada palavra.", sample: "Qual letra inicia a palavra?", firstActivity: 61, lastActivity: 80 },
  { number: 7, title: "Partes das palavras", text: "Falar devagar e contar as sílabas de cada palavra.", sample: "Conte as partes faladas", firstActivity: 81, lastActivity: 100 },
  { number: 8, title: "Grupos de palavras", text: "Classificar palavras em animal, comida, objeto ou brinquedo.", sample: "Que tipo de palavra é?", firstActivity: 101, lastActivity: 120 },
  { number: 9, title: "Compreensão de frases", text: "Ler frases e responder a perguntas sobre elas.", sample: "Leia e responda", firstActivity: 121, lastActivity: 140 },
  { number: 10, title: "Leitura de textos curtos", text: "Ler um pequeno texto e encontrar as respostas nele.", sample: "A pipa de Lia", firstActivity: 141, lastActivity: 160 },
  { number: 11, title: "Escrita de palavras", text: "Observar a palavra separada em sílabas e escrevê-la inteira.", sample: "Escreva a palavra inteira", firstActivity: 161, lastActivity: 180 },
  { number: 12, title: "Revisão", text: "Retomar o que foi praticado ao longo dos módulos.", sample: "Revisão: letra inicial", firstActivity: 181, lastActivity: 200 },
];

export function activityCount(m: KitModule): number {
  return m.lastActivity - m.firstActivity + 1;
}

/** Real sample page for a module, ready for ProductVisual / the lightbox. */
export function modulePage(m: KitModule): ProductImage {
  return {
    src: MODULE_PAGES[m.number - 1] ?? null,
    alt: `Módulo ${m.number}, atividade ${m.firstActivity}: ${m.sample}`,
    label: `Módulo ${m.number} · ${m.sample}`,
    mock: "tracing",
    ...PAGE_SIZE,
  };
}
