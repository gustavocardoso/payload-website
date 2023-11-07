import type { VariantProps } from 'tailwind-variants'
import Image from '~/components/Common/Image'
import type { Icon, IconsBlockprops } from '..'
import { setItemSize, setTextIconaligment } from '../styles'
import IconLink from './IconLink'
import iconStyles from './styles'

type IconsVariants = VariantProps<typeof iconStyles>

type IconsProps = Pick<
  IconsBlockprops,
  'icons' | 'iconsPerLine' | 'linkColour' | 'linkStyle' | 'textIconAlignment' | 'titleIconAlignment'
> &
  IconsVariants

const TitleBelowIcon: React.FC<IconsProps> = ({
  style,
  icons,
  iconsPerLine,
  textIconAlignment,
  linkColour,
  linkStyle,
  titleIconAlignment
}) => {
  const {
    blockContainer,
    iconContainer,
    iconImage,
    imageContainer,
    image,
    contentContainer,
    title
  } = iconStyles({ style, titleIconAlignment })
  const itemSize = setItemSize(iconsPerLine)
  const alignment = setTextIconaligment(textIconAlignment)

  return (
    <div className={`icons-block ${blockContainer()}`}>
      {icons &&
        icons.length > 0 &&
        icons.map((icon: Icon, index: number) => (
          <div className={`icon-wrapper ${itemSize}`} key={index}>
            <div className={`icon ${style} ${iconContainer()} ${alignment}`}>
              <div className={`icon-image ${iconImage()}`}>
                <div className={`icon-image-container ${imageContainer()}`}>
                  {icon.iconType === 'image' && (
                    <Image src={icon.iconImage.url} alt={icon.iconImage.alt} className={image()} />
                  )}

                  {icon.iconType === 'icon' && (
                    <span
                      className='text-3xl font-light text-white'
                      dangerouslySetInnerHTML={{ __html: icon.iconString! }}
                    ></span>
                  )}
                </div>
              </div>

              <div className={contentContainer()}>
                <h3 className={title()}>{icon.title}</h3>
                <p className='mb-0'>{icon.description}</p>

                {icon.link && (
                  <IconLink
                    link={icon.link}
                    linkStyle={linkStyle}
                    linkColour={linkColour}
                    className='mt-4'
                  />
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TitleBelowIcon
