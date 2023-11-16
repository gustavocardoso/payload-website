import { tv } from 'tailwind-variants'

export const ctaContainerStyles = tv({
  base: 'overflow-hidden',
  variants: {
    size: {
      fixed: 'container',
      full: 'w-full'
    },
    spacing: {
      padding: 'my-32',
      'no-padding': 'my-0'
    },
    rounded: {
      true: 'rounded-lg'
    }
  }
})

export const ctaStyles = tv({
  base: 'container p-16',
  variants: {
    media: {
      true: 'grid grid-cols-12'
    },
    button: {
      true: 'grid grid-cols-12'
    },
    alignment: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
  }
})
