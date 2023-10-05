import escapeHTML from 'escape-html'
import { Fragment } from 'react'

type Node = {
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

const isText = (value: any): boolean =>
  typeof value === 'object' && value !== null && typeof value.children[0].text === 'string'

const ContentSerialize: React.FC<SerializeProps> = ({ content }) => {
  return (
    <Fragment>
      {content?.map((node, i) => {
        if (isText(node)) {
          let text = (
            <span
              dangerouslySetInnerHTML={{ __html: escapeHTML(node?.children[0]?.text as string) }}
            />
          )

          if (node.children[0].bold) {
            text = <strong key={i}>{text}</strong>
          }

          if (node.children[0].code) {
            text = <code key={i}>{text}</code>
          }

          if (node.children[0].italic) {
            text = <em key={i}>{text}</em>
          }

          if (node.children[0].underline) {
            text = (
              <span style={{ textDecoration: 'underline' }} key={i}>
                {text}
              </span>
            )
          }

          if (node.children[0].strikethrough) {
            text = (
              <span style={{ textDecoration: 'line-through' }} key={i}>
                {text}
              </span>
            )
          }

          return <p key={i}>{text}</p>
        }

        if (!node) {
          return null
        }

        switch (node.type) {
          case 'br':
            return <br key={i} />
          case 'h1':
            return (
              <h1 key={i}>
                <ContentSerialize content={node.children} />
              </h1>
            )
          case 'h2':
            return (
              <h2 key={i}>
                <ContentSerialize content={node.children} />
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i}>
                <ContentSerialize content={node.children} />
              </h3>
            )
          case 'h4':
            return (
              <h4 key={i}>
                <ContentSerialize content={node.children} />
              </h4>
            )
          case 'h5':
            return (
              <h5 key={i}>
                <ContentSerialize content={node.children} />
              </h5>
            )
          case 'h6':
            return (
              <h6 key={i}>
                <ContentSerialize content={node.children} />
              </h6>
            )
          case 'quote':
            return (
              <blockquote key={i}>
                <ContentSerialize content={node.children} />
              </blockquote>
            )
          case 'ul':
            return (
              <ul key={i}>
                <ContentSerialize content={node.children} />
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                <ContentSerialize content={node.children} />
              </ol>
            )
          case 'li':
            return (
              <li key={i}>
                <ContentSerialize content={node.children} />
              </li>
            )
          // case 'link':
          //   return (
          //     <CMSLink
          //       key={i}
          //       type={node.linkType === 'internal' ? 'reference' : 'custom'}
          //       url={node.url}
          //       reference={node.doc as Reference}
          //       newTab={node?.newTab}
          //     >
          //       <ContentSerialize content={node.children} />
          //     </CMSLink>
          //   )

          // case 'upload': {
          //   return <RichTextUpload key={i} node={node} />
          // }

          // case 'label':
          //   return (
          //     <Label key={i}>
          //       <ContentSerialize content={node.children} />
          //     </Label>
          //   )

          // case 'large-body': {
          //   return (
          //     <LargeBody key={i}>
          //       <ContentSerialize content={node.children} />
          //     </LargeBody>
          //   )
          // }

          // case 'video': {
          //   const { source, id: videoID } = node

          //   if (source === 'vimeo' || source === 'youtube') {
          //     return <Video key={i} platform={source} id={videoID as string} />
          //   }

          //   return null
          // }

          default:
            return (
              <p key={i}>
                <ContentSerialize content={node.children} />
              </p>
            )
        }
      })}
    </Fragment>
  )
}

export default ContentSerialize
