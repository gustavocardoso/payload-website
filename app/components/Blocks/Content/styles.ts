export function setContentGrid(width: string, alignment: string): string {
  switch (alignment) {
    case 'center':
      if (width === 'col-span-10') {
        return 'col-start-2'
      }

      if (width === 'col-span-8') {
        return 'col-start-3'
      }

      if (width === 'col-span-6') {
        return 'col-start-4'
      }
      break

    case 'right':
      if (width === 'col-span-10') {
        return 'col-start-3'
      }

      if (width === 'col-span-8') {
        return 'col-start-5'
      }

      if (width === 'col-span-6') {
        return 'col-start-7'
      }
      break

    default:
      break
  }

  return ''
}
