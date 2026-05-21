import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "fr" | "en";

interface LangCtx {
  lang: Lang;
  toggleLang: () => void;
}

const Ctx = createContext<LangCtx>({ lang: "fr", toggleLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem("lang") as Lang) || "fr"; } catch { return "fr"; }
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return <Ctx.Provider value={{ lang, toggleLang }}>{children}</Ctx.Provider>;
}

export function useLanguage() {
  return useContext(Ctx);
}
