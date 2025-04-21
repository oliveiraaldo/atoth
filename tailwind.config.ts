import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#F5F6F9',
          100: '#E6E9F0',
          200: '#D7DBE6',
          300: '#C9CEDD',
          400: '#BAC1D4',
          500: '#9CA6C1',
          600: '#818EB0',
          700: '#546286',
          800: '#323B50',
          900: '#11141B',
        },
        blue: {
          50: '#F4F8FF',
          100: '#DEEAFF',
          200: '#BCD6FF',
          300: '#9BC1FF',
          400: '#7AADFF',
          500: '#FE730A',
          600: '#0060FC',
          700: '#004584',
          800: '#00296C',
          900: '#000E24',
        },
      },
    },
  },
  plugins: [],
}

export default config
