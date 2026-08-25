import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.jpeg.asset.json";
import { ARTIST_NAME, nav } from "@/content/site";
import { useT } from "@/lib/i18n";

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <span className="font-serif text-base tracking-[0.16em] uppercase">
            {ARTIST_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <button
          type="button"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-6 w-7 flex-col justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-full bg-foreground transition-transform duration-500 ${open ? "translate-y-[3px] rotate-6" : ""}`}
          />
          <span
            className={`block h-px w-full bg-foreground transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-6" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-background px-6 pt-10 lg:hidden">
          <ul className="space-y-6">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl font-light"
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
