import type { Metadata } from "next";
import { cn } from "@/lib/utils";
// import { ThemeProvider } from "@/components/providers/theme-provider";
import { AOSProvider }from '@/components/providers/aos-provider';
import { Footer } from "@/components/Footer";
// import { Navbar } from "@/components/Navbar";
// import { ScrollToTop } from "@/components/ScrollToTop";
import { TextSizeProvider } from "@/components/context/TextSizeContext";

import "./globals.css";
import "@/styles/fonts.css";
import { siteConfig } from "@/config/site";
import { fontSans, fontNexa, fontHeavitas, fontKomikax, fontOpenDyslexic } from "@/styles/fonts";

const { title, description } = siteConfig;

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-nexa font-extrabold antialiased",
          fontOpenDyslexic.variable,
          fontSans.variable,
          fontNexa.variable,
          fontHeavitas.variable,
          fontKomikax.variable
        )}
      >
        <AOSProvider>
          {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
            <div className="relative flex min-h-screen flex-col">
              {/* <Navbar /> */}
              <TextSizeProvider>
                <div className="flex-1">{children}</div>
              </TextSizeProvider>
              <Footer />
              {/* <ScrollToTop /> */}
            </div>
          {/* </ThemeProvider> */}
        </AOSProvider>
      </body>
    </html>
  );
}
