import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.jpeg.asset.json";
import { ARTIST_NAME, nav } from "@/content/site";
import { useLang, useT, type Lang } from "@/lib/i18n";

export function SiteHeader() {
  const t = useT();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={`flex items-center gap-1 ${mobile ? "" : "ml-6 border-l border-border pl-6"}`}
      aria-label={lang === "ro" ? "Schimbă limba" : "Change language"}
    >
      {(["ro", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`label-xs px-1 py-1 uppercase transition-colors ${
            lang === l ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          } ${mobile ? "text-base tracking-[0.18em]" : ""}`}
          aria-current={lang === l ? "true" : undefined}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
          aria-label={ARTIST_NAME}
        >
          <img src={logo.url} alt="" width={40} height={30} className="h-7 w-auto" />
          <span className="font-serif text-sm tracking-[0.16em] uppercase sm:text-base">
            {ARTIST_NAME}
          </span>
        </Link>

        <div className="hidden items-center lg:flex">
          <nav className="flex items-center gap-8">
            {nav.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="label-xs quiet-link text-foreground/70 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <LangToggle />
        </div>

        <div className="flex items-center gap-5 lg:hidden">
          <LangToggle />
          <button
            type="button"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[80] flex h-6 w-7 flex-col justify-center gap-1.5"
          >
            <span
              className={`block h-px w-full bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[70] overflow-y-auto bg-background px-6 pt-24 pb-16 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <ul className="space-y-6">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block font-serif text-3xl font-light"
                  activeProps={{ className: "italic" }}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <LangToggle mobile />
          </div>
        </div>
      )}
    </header>
  );
}

