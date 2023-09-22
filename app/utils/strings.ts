export const addSlashIfMissing = (inputString: string) => {
  if (typeof inputString !== 'string') {
    // Ensure we're working with a string
    return inputString
  }

  if (!inputString.startsWith('/')) {
    // Add a slash at the beginning if it's missing
    return '/' + inputString
  }

  return inputString // String already has a slash at the beginning
}
