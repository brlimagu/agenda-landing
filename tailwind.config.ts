import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class", // or 'media' or 'class'
  // theme: {
  //   extend: {
  //     colors: {
  //       trueGray: colors.neutral,
  //     },
  //   },
  //   fontFamily: {
  //     sans: ["Inter", ...defaultTheme.fontFamily.sans],
  //     stock: [defaultTheme.fontFamily.sans],
  //   },
  // },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  
  daisyui:{
    themes: [
      {
        tema:{
          "primary": "#4CAF50",      // Um verde moderno para ações principais e botões (Ex.: CTA).
          "secondary": "#8E24AA",    // Um roxo sofisticado para destacar elementos secundários.
          "accent": "#FFC107",       // Um amarelo vibrante para chamar atenção em botões ou ícones.
          "neutral": "#616161",      // Um cinza neutro para textos e backgrounds secundários.
          "base-100": "#FFFFFF",     // Branco puro para background principal.
          "info": "#2196F3",         // Azul para mensagens informativas.
          "success": "#4CAF50",      // Verde consistente para indicar sucesso.
          "warning": "#FF9800",      // Um laranja para alertas e mensagens de atenção.
          "error": "#F44336"         // Vermelho forte para erros.
        }
      }
    ]
  },
};
export default config;
