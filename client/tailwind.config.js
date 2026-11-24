/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#07060e',
          900: '#0d0b1a',
          850: '#141126',
          800: '#1c1836',
        },
        alabaster: {
          50: '#fafaf9',
          100: '#f4f4f2',
          200: '#e7e6e2',
        },
      },
      boxShadow: {
        'executive-dark': '0 18px 45px -15px rgba(0, 0, 0, 0.72)',
        'executive-light': '0 14px 35px -12px rgba(15, 23, 42, 0.08)',
        'indigo-glow': '0 10px 30px -10px rgba(124, 58, 237, 0.42)',
      },
    },
  },
  plugins: [],
};