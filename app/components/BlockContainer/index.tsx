import type { ReactNode } from 'react'
import type { Background } from '~/types/background'
import { setBgOpacity, slots } from './styles'

export type Alignment = 'right' | 'center' | 'left'
export type BackgroundOpacity = 'none' | '20' | '30' | '50' | '70' | '90'
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

const { blockContainer, blockImageContainer, blockBgImage, blockBgOverlay } = slots()

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
      className={`block-container ${paddingY} ${blockContainer()} background-${background} group overflow-hidden origin-center`}
    >
      <div className='relative z-20'>{children}</div>
      {background === 'image' && backgroundImage && (
        <>
          <div className={blockImageContainer()}>
            <img
              src={backgroundImage.url}
              className={`${blockBgImage()} ${opacity} group-hover:scale-105 transition-transform duration-[2000ms] ease-in-out`}
              alt='Hero background'
              role='presentation'
            />
          </div>
          <div className={blockBgOverlay()}></div>
        </>
      )}
    </section>
  )
}

export default BlockContainer
