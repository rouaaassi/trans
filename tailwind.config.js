import {nextui} from '@nextui-org/theme'
import { title } from 'process'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
        Roboto:["Roboto"],
        Archivo:["Archivo"]
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
