import escapeHTML from 'escape-html'

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

export function render({ node, buffer = [], parent, level = 0 }) {
  let html
  let tag

  if (node.type === 'link') {
    tag = 'a'
    buffer.push(`<${tag} href="${node.url}">`)
  } else if (node.type === 'upload') {
    buffer.push(
      `<img title="${escapeHTML(node.value.title || '')}" alt="${escapeHTML(
        node.value.alt || ''
      )}" src="${node.value.url}" />`
    )
  } else if (node.type) {
    tag = node.type
    buffer.push(`<${node.type}>`)
  } else if (level === 0 && !node.blockType) {
    tag = 'p'
    buffer.push(`<${tag}>`)
  }

  if (node.content) {
    node.content.forEach(content => render({ node: content, buffer, level: level }))
  } else if (node.children) {
    node.children.forEach(child => render({ node: child, buffer, parent: tag, level: level + 1 }))
  } else if (node.text) {
    html = escapeHTML(node.text)
    html = node.bold ? `<strong>${html}</strong>` : html
    html = node.italic ? `<em>${html}</em>` : html

    buffer.push(html)
  }

  if (tag) {
    buffer.push(`</${tag}>`)
  }

  return buffer
}
