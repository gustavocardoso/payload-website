import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    ribbonContainer: 'flex justify-center items-center gap-x-10 py-2',
    ribbonTitle: 'text-2xl mb-0',
    ribbonText: 'text-xl mb-0',
    ribbonTextLink: 'flex justify-center items-center gap-x-2 underline transition-all'
  }
})
