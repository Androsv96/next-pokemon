import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        fire: "#ef932d",
        grass: "#7ac74c",
        poison: "#b97fc9",
        water: "#6890f0",
        bug: "#a8b820",
        normal: "#a8a878",
        ground: "#e0c068",
        fighting: "#c03028",
        psychic: "#f85888",
        rock: "#b8a038",
        electric: "#f8d030",
        ghost: "#705898",
        ice: "#98d8d8",
        dragon: "#7038f8",
        dark: "#705848",
        steel: "#b8b8d0",
      },
      gradientColorStops: {
        fire: "#ef932d",
        grass: "#7ac74c",
        poison: "#b97fc9",
        water: "#6890f0",
        bug: "#a8b820",
        normal: "#a8a878",
        ground: "#e0c068",
        fighting: "#c03028",
        psychic: "#f85888",
        rock: "#b8a038",
        electric: "#f8d030",
        ghost: "#705898",
        ice: "#98d8d8",
        dragon: "#7038f8",
        dark: "#705848",
        steel: "#b8b8d0",
      },
    },
  },
  plugins: [],
};
export default config;
