"use client";
import { createContext, useContext, useState, useEffect } from "react";

type TextSize = "small" | "medium" | "large" | "extralarge";

interface TextSizeContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export const TextSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [textSize, setTextSizeState] = useState<TextSize>("medium");

  useEffect(() => {
    const savedSize = localStorage.getItem("textSize") as TextSize | null;
    if (savedSize) setTextSizeState(savedSize);
  }, []);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
    localStorage.setItem("textSize", size);
  };

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      <div className={`text-size-${textSize}`}>{children}</div>
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => {
  const context = useContext(TextSizeContext);
  if (!context) throw new Error("useTextSize must be used within TextSizeProvider");
  return context;
};
