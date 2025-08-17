"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";

export default function TranslatableText({ children }: { children: any }) {
  const { language, cache, setCache } = useLanguage();
  const [translated, setTranslated] = useState(children);

  useEffect(() => {
    if (!children || language === "en") {
      setTranslated(children);
      return;
    }

    const cacheKey = `${children}-${language}`;
    if (cache[cacheKey]) {
      setTranslated(cache[cacheKey]);
      return;
    }

    async function translate() {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: children, targetLang: language }),
      });

      const data = await res.json();
      if (data.translatedText) {
        setTranslated(data.translatedText);
        setCache((prev:any) => ({ ...prev, [cacheKey]: data.translatedText }));
      }
    }

    translate();
  }, [children, language]);

  return <>{translated}</>;
}
