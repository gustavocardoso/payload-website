export function setLinkColour(colour: string): string {
  switch (colour) {
    case 'secondary':
      return '!text-secondary hover:!text-secondary-hover'
      break

    case 'tertiary':
      return '!text-tertiary hover:!text-tertiary-hover'
      break

    case 'light':
      return '!text-light hover:!text-light-hover'
      break

    case 'dark':
      return '!text-dark hover:!text-dark-hover'
      break

    default:
      return '!text-primary hover:!text-primary-hover'
      break
  }
}
