import { tv } from 'tailwind-variants'

export default tv({
  base: 'font-medium block border-2 border-transparent transition-colors duration-200 px-5 py-3 rounded-lg',
  variants: {
    color: {
      'button-light': 'bg-white text-primary hover:bg-primary-hover hover:text-white',
      'button-dark': 'bg-dark text-light hover:bg-dark-hover hover:text-white',
      'button-highlight': 'bg-highlight text-dark hover:bg-highlight-hover hover:text-dark-hover',
      'button-primary': 'bg-primary text-light hover:bg-primary-hover hover:text-white',
      'button-secondary': 'bg-secondary text-dark hover:bg-secondary-hover hover:text-dark-hover',
      'button-tertiary': 'bg-tertiary text-white hover:bg-tertiary-hover hover:text-white',
      'button-outline-light':
        'bg-transparent text-white border-white hover:bg-white hover:text-dark hover:border-white',
      'button-outline-dark':
        'bg-transparent text-dark border-2 border-dark hover:bg-dark hover:text-white hover:border-dark',
      'button-outline-highlight':
        'bg-transparent text-highlight border-2 border-highlight hover:bg-highlight hover:text-dark-hover hover:border-highlight',
      'button-outline-primary':
        'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:border-primary',
      'button-outline-secondary':
        'bg-transparent text-secondary border-2 border-secondary hover:bg-secondary hover:text-dark-hover hover:border-secondary',
      'button-outline-tertiary':
        'bg-transparent text-tertiary border-2 border-tertiary hover:bg-tertiary hover:text-white hover:border-tertiary'
    },
    textStyle: {
      lowercase: 'lowercase',
      uppercase: 'uppercase',
      none: 'none'
    }
  }
})

export const slots = tv({
  slots: {
    buttonContainer: 'flex justify-center items-center gap-x-2'
  }
})
