import BlockContainer from '@ui/BlockContainer'
import type { ContentBlock } from '~/types/blocks/content'
import { setContentGrid } from './styles'
import ContentSerialize from '~/components/ContentSerialize'

const Content: React.FC<ContentBlock> = ({
  blockWIdth,
  blockPadding,
  background,
  backgroundImage,
  desktopContainerWidth,
  desktopContainerAlignment,
  title,
  titleTag,
  subtitle,
  subtitleTag,
  content
}) => {
  const containerWidth = blockWIdth === 'container' ? 'container' : 'w-full'
  const contentGrid = setContentGrid(desktopContainerWidth, desktopContainerAlignment)
  console.log(content)
  return (
    <BlockContainer
      paddingY={blockPadding}
      background={background}
      backgroundImage={backgroundImage}
    >
      <div className={`${containerWidth} grid grid-cols-12`}>
        <div className={`${desktopContainerWidth} ${contentGrid}`}>
          {(title || subtitle) && (
            <div className='content-header'>
              <h2 className='block'>{title}</h2>
              <h3 className='block'>{subtitle}</h3>

              <div className='block-content'>
                <ContentSerialize content={content} />
              </div>
            </div>
          )}
        </div>
      </div>
    </BlockContainer>
  )
}

export default Content
