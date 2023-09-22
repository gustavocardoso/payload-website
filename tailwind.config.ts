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
      white: '#fafafa',
      black: '#111'
    },
    fontFamily: {
      styled: '"Poppins", sans-serif',
      base: '"Roboto", sans-serif'
    },
    extend: {}
  },
  plugins: []
} satisfies Config
