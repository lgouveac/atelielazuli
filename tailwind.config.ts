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
        lazuli: {
          teal: '#0079AD',
          'teal-light': '#E6F4FA',
          'teal-dark': '#005F8A',
          navy: '#022F5D',
          'navy-light': '#0A4A8A',
          gold: '#D9943F',
          'gold-light': '#F5E6D0',
          'ocean-deep': '#013A5E',
          'ocean-mid': '#025F8A',
          'ocean-light': '#87CEEB',
          'ocean-foam': '#E0F4FF',
          sand: '#F5E6D0',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
      },
      spacing: {
        section: '8rem',
        'section-sm': '4rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'cart-badge': {
          '0%': { transform: 'scale(0.5)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'cart-badge': 'cart-badge 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
