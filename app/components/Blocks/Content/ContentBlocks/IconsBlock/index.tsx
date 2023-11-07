import Icons from './Icons'

export type Icon = {
  iconType: string
  iconString?: string
  iconImage: {
    title: 'BoardBig'
    alt: 'BoardBig'
    webp?: {
      mimeType: 'image/webp'
      url: string
    }
    mimeType: 'image/svg+xml'
    url: 'http://localhost:3000/media/Growth-Artboard-1.svg'
  }
  title: string
  description: string
  link?: string
  id: string
}

export type IconsBlockprops = {
  style: string
  iconsPerLine: string
  textIconAlignment: string
  linkStyle: string
  linkColour: string
  icons: Icon[]
  titleIconAlignment?: 'center' | 'top'
}

const IconsBlock: React.FC<IconsBlockprops> = ({
  style,
  iconsPerLine,
  textIconAlignment,
  titleIconAlignment,
  icons,
  linkColour,
  linkStyle
}) => {
  switch (style) {
    case 'title-below-icon':
      return (
        <Icons
          style={style}
          icons={icons}
          iconsPerLine={iconsPerLine}
          textIconAlignment={textIconAlignment}
          linkStyle={linkStyle}
          linkColour={linkColour}
        />
      )
      break

    case 'cards':
      return (
        <Icons
          style={style}
          icons={icons}
          iconsPerLine={iconsPerLine}
          textIconAlignment={textIconAlignment}
          linkStyle={linkStyle}
          linkColour={linkColour}
        />
      )
      break

    case 'icon-on-left':
      return (
        <Icons
          style={style}
          icons={icons}
          iconsPerLine={iconsPerLine}
          textIconAlignment={textIconAlignment}
          linkStyle={linkStyle}
          linkColour={linkColour}
          titleIconAlignment={titleIconAlignment}
        />
      )
      break

    default:
      break
  }
}

export default IconsBlock
