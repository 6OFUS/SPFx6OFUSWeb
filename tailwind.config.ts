import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heavitas: ["var(--font-heavitas)"],
        nexa: ["var(--font-nexa)", "sans-serif"],
        komikax: ["var(--font-komikax)", "cursive"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        richblack: "#0A1624",
        pennblue: "#131747",
        processcyan: "#49AFD7",
        turquoise: "#63CEB0",
        earthy: "#F0AA52",
        safetyorange: "#F08132",
        rojo: "#D82225",
        softwhite: "#FBFCFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        orangeGlow: '4px 4px 0px 4px rgba(255,165,0,0.8)',
      },
      fontSize: {
        xs: "calc(0.75rem * var(--font-size-multiplier, 1))",
        sm: "calc(0.875rem * var(--font-size-multiplier, 1))",
        base: "calc(1rem * var(--font-size-multiplier, 1))",
        lg: "calc(1.125rem * var(--font-size-multiplier, 1))",
        xl: "calc(1.25rem * var(--font-size-multiplier, 1))",
        "2xl": "calc(1.5rem * var(--font-size-multiplier, 1))",
        "3xl": "calc(1.875rem * var(--font-size-multiplier, 1))",
        "4xl": "calc(2.25rem * var(--font-size-multiplier, 1))",
        "5xl": "calc(3rem * var(--font-size-multiplier, 1))",
        "6xl": "calc(3.75rem * var(--font-size-multiplier, 1))",
        "7xl": "calc(4.5rem * var(--font-size-multiplier, 1))",
        "8xl": "calc(6rem * var(--font-size-multiplier, 1))",
        "9xl": "calc(8rem * var(--font-size-multiplier, 1))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
