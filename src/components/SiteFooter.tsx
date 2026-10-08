import { Link } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { contact, footerNav } from "@/content/site";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mx-auto max-w-[110rem] px-6 pb-10 md:px-12">
      <ContinuousLine className="mb-8 h-5 w-full text-border" />
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl">{contact.name}</p>
          <p className="label-xs mt-3">{contact.locations.join(" · ")}</p>
        </div>
        <div className="label-xs space-y-2">
          <a href={`mailto:${contact.email}`} className="quiet-link block hover:text-foreground">
            {contact.email}
          </a>
          {contact.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, "")}`}
              className="quiet-link block hover:text-foreground"
            >
              {p}
            </a>
          ))}
        </div>
        <nav className="label-xs flex flex-col gap-2 md:items-end">
          {footerNav.map((item) => (
            <Link key={item.to} to={item.to} className="quiet-link hover:text-foreground">
              {t(item.label)}
            </Link>
          ))}
        </nav>
      </div>
      <p className="label-xs mt-8">© {new Date().getFullYear()} {contact.name}</p>
    </footer>
  );
}
