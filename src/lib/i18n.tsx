import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ro" | "en" | "it";

export const LANGS: Lang[] = ["ro", "en", "it"];

/**
 * Bilingual/trilingual copy.
 * `ro` is the source of truth. `en` and `it` are optional so that missing
 * translations fall back to Romanian instead of showing invented content —
 * add the real translation later and it appears automatically.
 */
export type Copy = { ro: string; en?: string; it?: string };

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "ro", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ro");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "ro" || stored === "en" || stored === "it") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Resolve a localized string for the active language, falling back to Romanian. */
export function useT() {
  const { lang } = useLang();
  return (copy: Copy) => copy[lang] ?? copy.ro;
}
