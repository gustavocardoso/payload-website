import type { ReactNode } from 'react'
import { setBgOpacity, setTextColor, slots } from './styles'

export type Alignment = 'right' | 'center' | 'left'
export type HeroType = 'centered' | 'two-columns'
export type BackgroundOpacity = 'none' | '20' | '30' | '50'
export type BackgroundTextColor = 'light' | 'dark' | undefined

export type BlockContainerProps = {
  children: ReactNode
  paddingY: 'py-8' | 'py-16' | 'py-32' | 'py-64'
  background: string
  backgroundImage?: {
    url: string
  }
  backgroundOpacity?: BackgroundOpacity
  backgroundTextColor?: BackgroundTextColor
  id?: string
}

const { blockContainer, blockBgImage, blockBgOverlay } = slots()

const BlockContainer: React.FC<BlockContainerProps> = ({
  children,
  paddingY = 'py-32',
  background,
  backgroundImage = undefined,
  backgroundOpacity = 'none',
  backgroundTextColor = 'light',
  id = undefined
}) => {
  const opacity = setBgOpacity(backgroundOpacity)
  const textColor = setTextColor(backgroundTextColor)

  return (
    <section
      {...(id && { id: id })}
      className={`block-container ${paddingY} ${blockContainer()} background-${background} ${textColor}`}
    >
      {children}
      {background === 'image' && backgroundImage && (
        <>
          <div
            className={`${blockBgImage()} ${opacity}`}
            style={{ backgroundImage: `url(${backgroundImage.url})` }}
          ></div>
          <div className={blockBgOverlay()}></div>
        </>
      )}
    </section>
  )
}

export default BlockContainer
