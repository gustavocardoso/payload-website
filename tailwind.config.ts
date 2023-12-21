import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        DEFAULT: '#201e1f',
        hover: '#0B0A0A'
      },
      light: {
        DEFAULT: '#EDF2F4',
        hover: '#C0D1D8'
      },
      gray: {
        DEFAULT: '#8D99AE',
        hover: '#66758F'
      },
      primary: {
        DEFAULT: '#13B2B1',
        hover: '#0E8181',
        light: '#21E8E8'
      },
      secondary: {
        DEFAULT: '#C2D076',
        hover: '#AFC149'
      },
      tertiary: {
        DEFAULT: '#FF6F59',
        hover: '#FF3D1F'
      },
      highlight: {
        DEFAULT: '#FFE66D',
        hover: '#FFDA1F'
      },
      alert: {
        DEFAULT: '#CC2936',
        hover: '#991E29'
      },
      white: '#fafafa',
      black: '#111'
    },
    fontFamily: {
      styled: '"Poppins", sans-serif',
      base: '"Roboto", sans-serif'
    },
    extend: {
      fontSize: {
        paragraph: 'clamp(1.125rem, 1.1rem + 0.125vw, 1.25rem)',
        h1: 'clamp(2rem, 1.65rem + 1.7500000000000002vw, 3.75rem)',
        h2: 'clamp(2rem, 1.8rem + 1vw, 3rem)',
        h3: 'clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem)',
        h4: 'clamp(1.25rem, 1.125rem + 0.625vw, 1.875rem)',
        h5: 'clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem)',
        h6: 'clamp(1.125rem, 1.1rem + 0.125vw, 1.25rem)',
        'hero-text': 'clamp(1.125rem, 1.05rem + 0.375vw, 1.5rem)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
} satisfies Config
