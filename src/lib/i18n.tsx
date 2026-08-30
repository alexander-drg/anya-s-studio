import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ro" | "en";

export type Copy = { ro: string; en: string };

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "ro", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ro");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "ro" || stored === "en") setLang(stored);
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

/** Resolve a bilingual string for the active language. */
export function useT() {
  const { lang } = useLang();
  return (copy: Copy) => copy[lang];
}
