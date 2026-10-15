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
          ink: "#0A1C33",
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
        // Sector accents from the company profile: ICT (blue), Industrial
        // & Construction (ember), Agri-Commodities & Supply Chain (jade).
        ember: {
          DEFAULT: "#D97706",
          soft: "#F59E0B",
          dark: "#B45309",
          wash: "#FFF7ED",
        },
        jade: {
          DEFAULT: "#0D9488",
          soft: "#2DD4BF",
          dark: "#0F766E",
          wash: "#ECFDF9",
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
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-inter)", "system-ui", "sans-serif"],
        label: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.12em",
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(15, 39, 68, 0.12)",
        lift: "0 24px 48px -16px rgba(15, 39, 68, 0.28)",
        gold: "0 4px 16px -4px rgba(29, 111, 184, 0.35)",
        glow: "0 0 0 1px rgba(74,154,212,0.25), 0 12px 40px -8px rgba(29,111,184,0.55)",
        copper: "0 4px 16px -4px rgba(29, 111, 184, 0.25)",
        panel: "0 8px 32px -8px rgba(15, 39, 68, 0.18)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(180deg, #0F2744 0%, #152E4A 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #0A1C33 0%, #0F2744 45%, #123B5E 100%)",
        "profile-gradient":
          "linear-gradient(120deg, #0F2744 0%, #1D4E89 55%, #0D9488 100%)",
        "copper-gradient": "linear-gradient(180deg, #155A94 0%, #1D6FB8 100%)",
        "sand-gradient": "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -8%) scale(1.12)" },
          "66%": { transform: "translate(-6%, 6%) scale(0.94)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "60%, 100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        dash: {
          to: { strokeDashoffset: "-48" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(2.6)", opacity: "0" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        "page-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "aurora-slow": "aurora 26s ease-in-out infinite reverse",
        shine: "shine 3.2s ease-in-out infinite",
        dash: "dash 1.6s linear infinite",
        "ping-slow": "ping-slow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
        "page-in": "page-in 0.5s ease-out both",
      },
      borderRadius: {
        brand: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
