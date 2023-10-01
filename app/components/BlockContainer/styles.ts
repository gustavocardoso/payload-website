import { tv } from 'tailwind-variants'

export const slots = tv({
  slots: {
    blockContainer: 'relative z-0 group',
    blockBgImage: 'bg-image w-full absolute inset-0 bg-cover z-10',
    blockBgOverlay: 'bg-image bg-black absolute inset-0 z-0'
  }
})

export function setBgOpacity(opacity: string): string {
  switch (opacity) {
    case '20':
      return 'opacity-20'
    case '30':
      return 'opacity-30'
    case '50':
      return 'opacity-50'
    default:
      return 'opacity-100'
  }
}
