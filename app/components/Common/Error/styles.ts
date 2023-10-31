import { tv } from 'tailwind-variants'

export const slots = tv({
  slots: {
    errorContainer: 'flex justify-center items-center w-full',
    errorHeading: 'text-center mr-4',
    errorStatusCode: 'block text-9xl tracking-tighter font-bold',
    errorText: 'text-2xl font-normal block'
  }
})
