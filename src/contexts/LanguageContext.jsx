import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("ow_lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ow_lang", lang);
    } catch {}
  }, [lang]);

  const t = (english) => {
    if (lang === "en") return english;
    if (!english) return english;
    const entry = translations[english];
    if (!entry) return english;
    return entry[lang] || english;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
