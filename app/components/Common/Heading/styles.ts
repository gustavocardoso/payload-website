import { tv } from 'tailwind-variants'

export default tv({
  base: 'mb-2',
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      light: 'text-light',
      highlight: 'text-highlight',
      dark: 'text-dark'
    },
    textStyle: {
      lowercase: 'lowercase',
      uppercase: 'uppercase',
      none: 'none'
    },
    alignment: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
  }
})
