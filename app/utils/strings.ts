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

// Function to count words in a given text
export function countWords(text: string): number {
  return text.split(/\s+/).filter(function (word) {
    return word.length > 0
  }).length
}

// Function to traverse text nodes and count words
export function countWordsInTextNodes(node: Node): number {
  if (node.nodeType === 3) {
    // Text node
    return countWords(node.nodeValue || '')
  } else if (node.nodeType === 1) {
    // Element node
    let wordCount = 0
    for (let i = 0; i < node.childNodes.length; i++) {
      wordCount += countWordsInTextNodes(node.childNodes[i])
    }
    return wordCount
  } else {
    return 0 // Other node types (comments, etc.)
  }
}

export function estimateReadingTime(wordCount: number, wordsPerMinute: number = 200): number {
  const readingTimeMinutes: number = Math.floor(wordCount / wordsPerMinute)

  return readingTimeMinutes
}

export function countWordsInPostContent(postContent: Node): number {
  if (postContent) {
    const totalWordCount = countWordsInTextNodes(postContent)
    return totalWordCount
  }

  return 0
}
