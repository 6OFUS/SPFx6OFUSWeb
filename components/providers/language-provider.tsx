"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextValue {
  language: string;
  setLanguage: (lang: string) => void;
  cache: { [key: string]: any };
  setCache: (cache: { [key: string]: any }) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en"); // default English
  const [cache, setCache] = useState({}); // stores translations

  const value = {
    language,
    setLanguage,
    cache,
    setCache,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
