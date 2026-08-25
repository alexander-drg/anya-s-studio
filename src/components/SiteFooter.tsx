import { Link } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { contact, nav } from "@/content/site";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mx-auto max-w-[110rem] px-6 pb-14 md:px-12">
      <ContinuousLine className="mb-12 h-6 w-full text-border" />
      <div className="grid gap-10 md:grid-cols-3">
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
          {nav.slice(1).map((item) => (
            <Link key={item.to} to={item.to} className="quiet-link hover:text-foreground">
              {t(item.label)}
            </Link>
          ))}
        </nav>
      </div>
      <p className="label-xs mt-12">© {new Date().getFullYear()} {contact.name}</p>
    </footer>
  );
}
