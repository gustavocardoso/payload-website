import { tv } from 'tailwind-variants'

export default tv({
  base: 'bg-light border border-gray inline-block py-2 px-4 rounded-lg text-lg group hover:bg-highlight',
  variants: {
    selected: {
      true: 'bg-highlight'
    }
  }
})
