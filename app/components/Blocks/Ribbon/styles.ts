import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    ribbonContainer: 'flex justify-center items-center gap-x-10 py-2',
    ribbonTitle: 'text-2xl',
    ribbonText: 'text-xl',
    ribbonTextLink: 'flex justify-center items-center gap-x-2 underline transition-all'
  }
})
