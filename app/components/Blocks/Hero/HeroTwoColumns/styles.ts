import { tv } from 'tailwind-variants'
import type { Alignment } from '~/types/blocks/hero'

export const slots = tv({
  slots: {
    heroContainer: 'relative z-20 container grid grid-cols-12 px-4',
    heroContent: 'col-span-7 pr-8',
    heroMedia: 'flex items-center col-span-5 pl-8'
  }
})

export function setTextAlignment(alignment: string): string {
  switch (alignment) {
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-left'
  }
}

export function setButtonGroupAlignment(alignment: string): Alignment {
  switch (alignment) {
    case 'center':
      return 'center'
    case 'right':
      return 'right'
    default:
      return 'left'
  }
}
