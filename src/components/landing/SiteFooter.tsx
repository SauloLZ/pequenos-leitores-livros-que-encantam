import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { CONTACT, PRODUCT } from "@/lib/config";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted pb-28 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Material digital complementar de apoio à alfabetização. Não substitui o acompanhamento pedagógico.
          </p>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-foreground">Contato</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4" />
              {CONTACT.email ? (
                <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">{CONTACT.email}</a>
              ) : (
                <span>Canal de contato em breve</span>
              )}
            </li>
            {CONTACT.whatsapp && <li>WhatsApp: {CONTACT.whatsapp}</li>}
            {CONTACT.instagram && <li>Instagram: {CONTACT.instagram}</li>}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-foreground">Informações</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/privacidade" className="text-muted-foreground hover:text-foreground">Política de privacidade</Link></li>
            <li><Link to="/termos" className="text-muted-foreground hover:text-foreground">Termos de uso</Link></li>
            <li><Link to="/reembolso" className="text-muted-foreground hover:text-foreground">Política de reembolso</Link></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
        © {year} {PRODUCT.fullName}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
