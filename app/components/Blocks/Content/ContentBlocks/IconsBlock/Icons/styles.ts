import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    blockContainer: 'col-span-12 flex flex-wrap justify-center gap-y-12',
    iconContainer: '',
    iconImage: '',
    contentContainer: '',
    imageContainer: 'w-16 h-16 rounded-lg mb-4 bg-primary flex justify-center items-center',
    image: 'w-16 invert',
    title: 'text-xl font-semibold mb-4'
  },
  variants: {
    style: {
      'title-below-icon': {
        iconContainer: 'flex flex-col mb-0 m-8 mt-0'
      },
      'icon-on-left': {
        iconContainer: 'grid grid-cols-6 !text-left mb-0 m-8 mt-0',
        iconImage: 'col-span-1 flex flex-col h-full',
        imageContainer: 'mb-0',
        contentContainer: 'col-span-5'
      },
      cards: {
        iconContainer: 'flex flex-col bg-dark m-8 mt-0 pt-8 px-8 rounded-lg h-full text-white'
      }
    },
    titleIconAlignment: {
      top: {
        iconImage: 'justify-start'
      },
      center: {
        iconImage: 'justify-center'
      }
    }
  }
})
