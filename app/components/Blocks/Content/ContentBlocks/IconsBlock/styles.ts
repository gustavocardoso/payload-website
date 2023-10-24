export function setTextIconaligment(alignment: string): string {
  switch (alignment) {
    case 'center':
      return 'items-center text-center'
      break

    case 'right':
      return 'items-end text-right'
      break

    default:
      return 'items-start text-left'
      break
  }
}

export function setItemSize(iconsPerLine: string): string {
  switch (iconsPerLine) {
    case '2':
      return 'w-1/2'
      break

    case '3':
      return 'w-1/3'
      break

    case '4':
      return 'w-1/4'
      break

    default:
      return 'w-full'
      break
  }
}
