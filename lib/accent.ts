import type { Accent } from "./content";

/** Literal class sets per sector accent so Tailwind can see every class. */
export const accentStyles: Record<
  Accent,
  {
    text: string;
    textOnDark: string;
    bg: string;
    softBg: string;
    border: string;
    ring: string;
    bar: string;
    glow: string;
    hex: string;
  }
> = {
  blue: {
    text: "text-accent-text",
    textOnDark: "text-gold-soft",
    bg: "bg-gold",
    softBg: "bg-accent-wash",
    border: "border-gold/30",
    ring: "group-hover:ring-gold/40",
    bar: "from-gold to-gold-soft",
    glow: "rgba(29,111,184,0.35)",
    hex: "#1D6FB8",
  },
  ember: {
    text: "text-ember-dark",
    textOnDark: "text-ember-soft",
    bg: "bg-ember",
    softBg: "bg-ember-wash",
    border: "border-ember/30",
    ring: "group-hover:ring-ember/40",
    bar: "from-ember to-ember-soft",
    glow: "rgba(217,119,6,0.32)",
    hex: "#D97706",
  },
  jade: {
    text: "text-jade-dark",
    textOnDark: "text-jade-soft",
    bg: "bg-jade",
    softBg: "bg-jade-wash",
    border: "border-jade/30",
    ring: "group-hover:ring-jade/40",
    bar: "from-jade to-jade-soft",
    glow: "rgba(13,148,136,0.32)",
    hex: "#0D9488",
  },
};
