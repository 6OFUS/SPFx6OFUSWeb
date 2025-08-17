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

  const sizeMultipliers: { [key in TextSize]: number } = {
    small: 0.8,
    medium: 1,
    large: 1.2,
    extralarge: 1.5,
  };

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      <div style={{ "--font-size-multiplier": sizeMultipliers[textSize] } as React.CSSProperties}>
        {children}
      </div>
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => {
  const context = useContext(TextSizeContext);
  if (!context) throw new Error("useTextSize must be used within TextSizeProvider");
  return context;
};
