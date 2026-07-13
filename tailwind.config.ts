import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A5C",
          deep: "#0F2744",
          imperial: "#152E4A",
          800: "#163352",
          900: "#0F2744",
        },
        gold: {
          DEFAULT: "#1D6FB8",
          soft: "#4A9AD4",
          dark: "#155A94",
        },
        accent: {
          DEFAULT: "#1D6FB8",
          text: "#155A94",
          bright: "#4A9AD4",
          wash: "#E8F2FA",
        },
        teal: {
          DEFAULT: "#475569",
          soft: "#64748B",
          wash: "#F1F5F9",
        },
        charcoal: "#1E293B",
        mist: "#F8FAFC",
        parchment: "#F1F5F9",
        bronze: "#64748B",
      },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-inter)", "system-ui", "sans-serif"],
        label: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.12em",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(15, 39, 68, 0.12)",
        gold: "0 4px 16px -4px rgba(29, 111, 184, 0.35)",
        copper: "0 4px 16px -4px rgba(29, 111, 184, 0.25)",
        panel: "0 8px 32px -8px rgba(15, 39, 68, 0.18)",
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(180deg, #0F2744 0%, #152E4A 100%)",
        "hero-gradient":
          "linear-gradient(180deg, #0F2744 0%, #1B3A5C 100%)",
        "copper-gradient":
          "linear-gradient(180deg, #155A94 0%, #1D6FB8 100%)",
        "sand-gradient":
          "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
        lattice:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-pattern":
          "radial-gradient(circle at 85% 15%, rgba(29,111,184,0.18) 0%, transparent 42%), radial-gradient(circle, rgba(255,255,255,0.07) 1.2px, transparent 1.2px), repeating-linear-gradient(-55deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 14px)",
      },
      backgroundSize: {
        lattice: "48px 48px",
        "hero-pattern": "auto, 22px 22px, auto",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
      },
      borderRadius: {
        brand: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
