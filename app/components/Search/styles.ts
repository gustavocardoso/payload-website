import { tv } from 'tailwind-variants'

export const slots = tv({
  slots: {
    label: 'text-lg text-gray font-normal flex items-center peer-checked:text-dark-hover',
    blockImageContainer: 'absolute inset-0 z-10 pointer-events-none',
    blockBgImage: 'bg-image w-full h-full object-cover object-center',
    blockBgOverlay: 'bg-image bg-black absolute inset-0 z-0 pointer-events-none'
  }
})
