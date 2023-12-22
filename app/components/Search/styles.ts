import { tv } from 'tailwind-variants'

export const slots = tv({
  slots: {
    label: 'text-lg text-gray font-normal flex items-center peer-checked:text-dark-hover',
    searchForm: 'relative flex items-center justify-between',
    filterWrapper: 'flex gap-x-6 items-center',
    checkBoxWrapper: 'flex items-center',
    checkbox:
      'transition-all appearance-none bg-white w-5 h-5 border-gray text-highlight-hover rounded accent-highlight focus:ring-primary mr-2 peer cursor-pointer',
    searchField:
      'rounded-lg py-3 px-4 w-96 relative focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 border-gray bg-white transition-all',
    submitButton: 'absolute right-4'
  }
})
