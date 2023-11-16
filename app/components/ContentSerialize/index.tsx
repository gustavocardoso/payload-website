import escapeHTML from 'escape-html'
import React, { Fragment } from 'react'
import { Text } from 'slate'

export type Node = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children: Node[]
  url?: string
  [key: string]: unknown
  newTab?: boolean
}

type SerializeProps = {
  content?: Node[]
}

// Helper function to check if a value is an empty string
const isEmptyString = (value: string | any[]): boolean => {
  return typeof value === 'string' && value.trim() === ''
}

const serialize = (children: Node[]) => {
  if (!children || children.length === 0) {
    return null
  }

  return children.map((node: Node, i: number) => {
    if (Text.isText(node)) {
      const nodetext = node.text.replace('\n', '<br>')

      if (nodetext === '') return null

      // let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(nodetext) }} />
      let text = <p dangerouslySetInnerHTML={{ __html: nodetext }} />

      if (node.bold) {
        text = <strong key={i}>{text}</strong>
      }

      if (node.code) {
        text = <code key={i}>{text}</code>
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>
    }

    if (!node) {
      return null
    }

    switch (node.type) {
      case 'h1':
        return <h1 key={i}>{serialize(node.children)}</h1>
      // Iterate through all headings here...
      case 'h6':
        return <h6 key={i}>{serialize(node.children)}</h6>
      case 'blockquote':
        return <blockquote key={i}>{serialize(node.children)}</blockquote>
      case 'ul':
        return <ul key={i}>{serialize(node.children)}</ul>
      case 'ol':
        return <ol key={i}>{serialize(node.children)}</ol>
      case 'li':
        return <li key={i}>{serialize(node.children)}</li>
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        )

      default:
        if (node.children && node.children.length > 0 && !isEmptyString(node.children)) {
          return <Fragment key={i}>{serialize(node.children)}</Fragment>
        }
    }

    return null
  })
}

const ContentSerialize: React.FC<SerializeProps> = ({ content }) => {
  const html = serialize(content!)
  return html
}

export default ContentSerialize
