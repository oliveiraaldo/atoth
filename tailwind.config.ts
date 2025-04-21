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
      fontSize: {
        h1: ['48px', { lineHeight: '58px', letterSpacing: '-0.02em' }],
        'h1-sm': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
        h2: ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
        'h2-sm': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
        h3: ['28px', { lineHeight: '34px', letterSpacing: '-0.02em' }],
        h4: ['24px', { lineHeight: '30px', letterSpacing: '-0.02em' }],
        'h4-sm': ['20px', { lineHeight: '24px', letterSpacing: '-0.02em' }],
        h5: ['18px', { lineHeight: '23px', letterSpacing: '-0.02em' }],
        'h5-sm': ['16px', { lineHeight: '19px', letterSpacing: '-0.02em' }],
        p1: ['16px', { lineHeight: '24px', letterSpacing: '-0.02em' }],
        p2: ['14px', { lineHeight: '20px', letterSpacing: '-0.02em' }],
      },      
    },
  },
  plugins: [],
}

export default config
