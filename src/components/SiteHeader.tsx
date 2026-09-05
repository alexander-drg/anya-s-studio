import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ARTIST_NAME, nav } from "@/content/site";
import { LANGS, useLang, useT, type Lang } from "@/lib/i18n";

export function SiteHeader() {
  const t = useT();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" || pathname === "";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overHero && !scrolled && !open;

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={`flex items-center gap-1 ${mobile ? "" : "ml-8 border-l border-current/20 pl-8"}`}
      aria-label={lang === "ro" ? "Schimbă limba" : lang === "it" ? "Cambia lingua" : "Change language"}
    >
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="label-xs px-1 opacity-30">/</span>}
          <button
            type="button"
            onClick={() => setLang(l as Lang)}
            className={`label-xs py-1 uppercase transition-opacity ${
              lang === l ? "opacity-100" : "opacity-45 hover:opacity-80"
            } ${mobile ? "text-base tracking-[0.18em]" : ""}`}
            aria-current={lang === l ? "true" : undefined}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[80] transition-colors duration-500 ${
          transparent
            ? "bg-transparent text-[var(--color-cream,#faf7f2)]"
            : "bg-background/95 text-foreground backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-5 md:px-12 md:py-7">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-serif text-sm font-light tracking-[0.18em] whitespace-nowrap sm:text-base"
            aria-label={ARTIST_NAME}
          >
            {ARTIST_NAME}
          </Link>

          <div className="hidden items-center lg:flex">
            <nav className="flex items-center gap-9">
              {nav.slice(1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="label-xs quiet-link opacity-70 transition-opacity hover:opacity-100"
                  activeProps={{ className: "opacity-100" }}
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>
            <LangToggle />
          </div>

          <div className="flex items-center gap-5 lg:hidden">
            <LangToggle mobile={false} />
            <button
              type="button"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-[80] flex h-6 w-7 flex-col justify-center gap-1.5"
            >
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[70] overflow-y-auto bg-background px-6 pt-28 pb-16 lg:hidden"
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
        </div>
      )}
    </>
  );
}
