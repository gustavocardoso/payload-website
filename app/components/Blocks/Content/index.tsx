import BlockContainer from '@ui/BlockContainer'
import type { ContentBlock } from '~/types/blocks/content'
import { setContentGrid } from './styles'

const Content: React.FC<ContentBlock> = ({
  blockWIdth,
  blockPadding,
  background,
  backgroundImage,
  desktopContainerWidth,
  desktopContainerAlignment
}) => {
  const containerWidth = blockWIdth === 'container' ? 'container' : 'w-full'
  const contentGrid = setContentGrid(desktopContainerWidth, desktopContainerAlignment)

  return (
    <BlockContainer
      paddingY={blockPadding}
      background={background}
      backgroundImage={backgroundImage}
    >
      <div className={`${containerWidth} grid grid-cols-12 border-2 border-alert`}>
        <div className={`${desktopContainerWidth} ${contentGrid} border-2 border-primary`}>
          <h2>Content Block Component</h2>
          <p>{blockWIdth}</p>
        </div>
      </div>
    </BlockContainer>
  )
}

export default Content
