import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    imageContainer: 'text-center max-w-[1024px] m-auto',
    imageElement: 'block m-auto',
    imageCaption: 'block bg-light-hover/20 italic px-4 py-2'
  }
})
