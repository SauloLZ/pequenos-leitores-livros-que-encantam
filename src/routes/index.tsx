import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PRODUCT } from "@/lib/config";
import { COVER_IMAGE } from "@/lib/product-images";
import coverShare from "@/assets/kit/capa-oficial.jpg.asset.json";
import { initMetaPixel, trackEvent } from "@/lib/tracking";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Gallery } from "@/components/landing/Gallery";
import { Benefits } from "@/components/landing/Benefits";
import { Modules } from "@/components/landing/Modules";
import { Included } from "@/components/landing/Included";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Offer } from "@/components/landing/Offer";
import { Faq, FinalCta } from "@/components/landing/Faq";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { MobileCtaBar } from "@/components/landing/MobileCtaBar";

const TITLE = "Pequenos Leitores — Kit de Alfabetização | 200 atividades por R$ 17,99";
const DESCRIPTION =
  "200 atividades ilustradas em 12 módulos para apoiar a alfabetização de forma divertida. PDFs A4 prontos para imprimir, guia de aplicação e gabaritos.";
/** Published address, so link previews on Facebook, Instagram and WhatsApp get an absolute image URL. */
const SITE_URL = "https://pequenos-leitores-livros-que-encantam.lovable.app";
const SHARE_IMAGE = `${SITE_URL}${coverShare.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: SHARE_IMAGE },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: COVER_IMAGE.src ? [{ rel: "preload", as: "image", href: COVER_IMAGE.src, fetchPriority: "high" }] : [],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    initMetaPixel();
    trackEvent("ViewContent", {
      content_name: PRODUCT.fullName,
      value: PRODUCT.price,
      currency: PRODUCT.currency,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Gallery />
        <Benefits />
        <Modules />
        <Included />
        <HowItWorks />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}
