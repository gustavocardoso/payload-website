import { tv } from 'tailwind-variants'

export default tv({
  base: 'button-group mt-16 flex gap-x-6',
  variants: {
    alignment: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    }
  }
})
