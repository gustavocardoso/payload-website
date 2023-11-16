import type { Button, ButtonParameters } from '~/types/buttons'

export const createButton = ({ type, label, page, url, style }: ButtonParameters): Button => {
  let text
  let href
  let buttonStyle

  // console.log({ type, label, page, url, style })

  switch (type) {
    case 'page':
      if (page?.status === 'published') {
        text = label ? label : page?.title
        href = page.slug === 'home' ? '/' : `/${page?.slug}`
        buttonStyle = style
      } else {
        text = undefined
        href = undefined
        buttonStyle = undefined
      }
      break

    case 'custom':
      text = label
      href = url
      buttonStyle = style
      break
  }

  return text !== undefined && href !== undefined && buttonStyle !== undefined
    ? { text, href, buttonStyle }
    : null
}
