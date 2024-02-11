import type { ReactNode } from 'react'
import { useMediaSizes } from '~/hooks/useMediaSizes'
import type { Background } from '~/types/background'
import { Media } from '~/types/media'
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
  backgroundImage?: Media
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
  let media, mediaType

  if (background === 'image' && backgroundImage !== undefined) {
    ;({ media, mediaType } = useMediaSizes<'background' | 'backgroundMedium' | 'backgroundSmall'>(
      backgroundImage
    ))
  }

  return (
    <section
      {...(id && { id: id })}
      className={`block-container ${paddingY} ${blockContainer()} background-${background} group overflow-hidden origin-center`}
    >
      <div className='relative z-20'>{children}</div>
      {background === 'image' && backgroundImage !== undefined && (
        <>
          <div className={blockImageContainer()}>
            <picture>
              {media && typeof media === 'object' && (
                <>
                  <source media='(min-width: 1000px)' srcSet={media.background.url} />
                  <source media='(min-width: 800px)' srcSet={media.backgroundMedium.url} />
                  <img
                    className={`${blockBgImage()} ${opacity} group-hover:scale-105 transition-transform duration-[5000ms] ease-in-out`}
                    alt='Hero background'
                    role='presentation'
                    src={media.backgroundMedium.url}
                  />
                </>
              )}
            </picture>
          </div>
          <div className={blockBgOverlay()}></div>
        </>
      )}
    </section>
  )
}

export default BlockContainer
