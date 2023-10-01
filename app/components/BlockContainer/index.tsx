import type { ReactNode } from 'react'
import type { Background } from '~/types/background'
import { setBgOpacity, slots } from './styles'

export type Alignment = 'right' | 'center' | 'left'
export type HeroType = 'centered' | 'two-columns'
export type BackgroundOpacity = 'none' | '20' | '30' | '50'
export type BackgroundTextColor = 'light' | 'dark' | undefined
export type BlockPaddingY =
  | 'py-8'
  | 'py-16'
  | 'py-32'
  | 'py-64'
  | 'py-0'
  | 'pt-0 pb-28'
  | 'pt-28 pb-0'
  | 'py-28'

export type BlockContainerProps = {
  children: ReactNode
  paddingY?: BlockPaddingY
  background: Background
  backgroundImage?: {
    url: string
  }
  backgroundOpacity?: BackgroundOpacity
  id?: string
}

const { blockContainer, blockBgImage, blockBgOverlay } = slots()

const BlockContainer: React.FC<BlockContainerProps> = ({
  children,
  paddingY = 'py-32',
  background,
  backgroundImage = undefined,
  backgroundOpacity = 'none',
  id = undefined
}) => {
  const opacity = setBgOpacity(backgroundOpacity)

  return (
    <section
      {...(id && { id: id })}
      className={`block-container ${paddingY} ${blockContainer()} background-${background}`}
    >
      <div className='relative z-20'>{children}</div>
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
