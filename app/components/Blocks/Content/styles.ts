export function setContentGrid(width: string, alignment: string): string {
  if (width === 'col-span-12') {
    return 'col-span-12'
  }

  switch (alignment) {
    case 'center':
      if (width === 'col-span-10') {
        return 'col-span-10 col-start-2'
      }

      if (width === 'col-span-8') {
        return 'col-span-8 col-start-3'
      }

      if (width === 'col-span-6') {
        return 'col-span-6 col-start-4'
      }
      break

    case 'right':
      if (width === 'col-span-10') {
        return 'col-span-10 col-start-3'
      }

      if (width === 'col-span-8') {
        return 'col-span-8 col-start-5'
      }

      if (width === 'col-span-6') {
        return 'col-span-6 col-start-7'
      }
      break

    case 'left':
      if (width === 'col-span-10') {
        return 'col-span-10'
      }

      if (width === 'col-span-8') {
        return 'col-span-8'
      }

      if (width === 'col-span-6') {
        return 'col-span-6'
      }
      break

    default:
      return 'col-span-12'
      break
  }

  return ''
}

export function setContentAlignment(alignment: string): string {
  switch (alignment) {
    case 'left':
      return 'text-left'
      break
    case 'right':
      return 'text-right'
      break

    default:
      return 'text-center'
      break
  }
}
