import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ARTIST_NAME, nav } from "@/content/site";
import { useLang, useT } from "@/lib/i18n";

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

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-serif text-lg tracking-[0.18em] uppercase"
        >
          {ARTIST_NAME}
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-xs quiet-link text-foreground/70 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {t(item.label)}
            </Link>
          ))}
          <LangSwitch lang={lang} setLang={setLang} />
        </nav>

        <div className="flex items-center gap-6 lg:hidden">
          <LangSwitch lang={lang} setLang={setLang} />
          <button
            type="button"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-6 w-7 flex-col justify-center gap-1.5"
          >
            <span
              className={`block h-px w-full bg-foreground transition-transform duration-500 ${open ? "translate-y-[3px] rotate-6" : ""}`}
            />
            <span
              className={`block h-px w-full bg-foreground transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-6" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[76px] z-40 bg-background px-6 pt-10 lg:hidden">
          <ul className="space-y-6">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl font-light"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
}: {
  lang: "ro" | "en";
  setLang: (l: "ro" | "en") => void;
}) {
  return (
    <div className="label-xs flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLang("ro")}
        className={lang === "ro" ? "text-foreground" : "hover:text-foreground"}
      >
        RO
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={lang === "en" ? "text-foreground" : "hover:text-foreground"}
      >
        EN
      </button>
    </div>
  );
}
