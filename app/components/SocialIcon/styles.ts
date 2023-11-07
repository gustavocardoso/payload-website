import { tv } from 'tailwind-variants'

export default tv({
  variants: {
    size: {
      regular: '',
      large: '',
      small: ''
    },
    type: {
      regular: '',
      fa: ''
    }
  },
  compoundVariants: [
    { type: 'fa', size: 'small', class: 'text-xl' },
    { type: 'fa', size: 'regular', class: 'text-2xl' },
    { type: 'fa', size: 'large', class: 'text-3xl' },
    { type: 'regular', size: 'small', class: 'h-4 w-4' },
    { type: 'regular', size: 'regular', class: 'h-6 w-6' },
    { type: 'regular', size: 'large', class: 'h-8 w-8' }
  ]
})
