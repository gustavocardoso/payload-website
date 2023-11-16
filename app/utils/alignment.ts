export const setContentAlignment = (alignment: string): string => {
  switch (alignment) {
    case 'right':
      return 'text-right'
      break

    case 'center':
      return 'text-center'
      break

    default:
      return 'text-left'
      break
  }
}
