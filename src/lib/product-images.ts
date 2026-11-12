/**
 * Real product images (extracted from the kit PDFs) are wired here.
 * A `null` src falls back to an illustrated preview marked as "ilustrativa".
 */
import cover from "@/assets/kit/capa-oficial.webp.asset.json";
import m01 from "@/assets/kit/modulo-01.webp.asset.json";
import m02 from "@/assets/kit/modulo-02.webp.asset.json";
import m03 from "@/assets/kit/modulo-03.webp.asset.json";
import m04 from "@/assets/kit/modulo-04.webp.asset.json";
import m05 from "@/assets/kit/modulo-05.webp.asset.json";
import m06 from "@/assets/kit/modulo-06.webp.asset.json";
import m07 from "@/assets/kit/modulo-07.webp.asset.json";
import m08 from "@/assets/kit/modulo-08.webp.asset.json";
import m09 from "@/assets/kit/modulo-09.webp.asset.json";
import m10 from "@/assets/kit/modulo-10.webp.asset.json";
import m11 from "@/assets/kit/modulo-11.webp.asset.json";
import m12 from "@/assets/kit/modulo-12.webp.asset.json";
import variety1 from "@/assets/kit/galeria-modulos-1-a-6.webp.asset.json";
import variety2 from "@/assets/kit/galeria-modulos-7-a-12.webp.asset.json";

export type MockKind = "cover" | "tracing" | "syllables" | "match" | "words" | "reading" | "writing";

export interface ProductImage {
  src: string | null;
  alt: string;
  label: string;
  mock: MockKind;
  width?: number;
  height?: number;
}

export const COVER_IMAGE: ProductImage = {
  src: cover.url,
  alt: "Capa do Pequenos Leitores — Kit de Alfabetização Progressiva: 200 atividades em 12 módulos",
  label: "Capa do kit",
  mock: "cover",
  width: 834,
  height: 1179,
};

/** One real page per module, in module order (index 0 = Módulo 1). */
const PAGE_SIZE = { width: 338, height: 479 };
export const MODULE_PAGES: string[] = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12].map((a) => a.url);
export { PAGE_SIZE };

/** Composite images showing one page of every module side by side. */
export const VARIETY_IMAGES: ProductImage[] = [
  { src: variety1.url, alt: "Páginas de exemplo dos módulos 1 a 6", label: "Módulos 1 a 6", mock: "cover", width: 1400, height: 1140 },
  { src: variety2.url, alt: "Páginas de exemplo dos módulos 7 a 12", label: "Módulos 7 a 12", mock: "cover", width: 1400, height: 1140 },
];
