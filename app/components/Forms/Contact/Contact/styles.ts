import { tv } from 'tailwind-variants'

export default tv({
  base: 'rounded-lg py-3 px-4 w-full relative focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 border-gray bg-white transition-all',
  variants: {
    error: {
      true: 'border-alert'
    }
  }
})

export const slots = tv({
  slots: {
    label: 'font-medium text-gray-500 px-2 mb-2 flex items-center',
    submitButtonIdle:
      'button font-medium inline-block border-2 border-transparent transition-colors duration-200 px-5 py-3 rounded-lg bg-highlight text-dark hover:bg-highlight-hover hover:text-dark-hover uppercase focus:border-primary focus:ring-primary focus:ring-1',
    submitButtonSubmitting:
      'button font-medium inline-block border-2 border-transparent transition-colors duration-200 px-5 py-3 rounded-lg bg-light text-light-hover hover:bg-light hover:text-dark uppercase focus:border-light focus:ring-light focus:ring-1'
  }
})
