export function setTextColor(color: string | undefined): string {
  switch (color) {
    case 'light':
      return 'text-light'

    default:
      return 'text-dark'
  }
}
