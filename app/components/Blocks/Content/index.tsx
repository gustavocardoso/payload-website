import BlockContainer from '@ui/BlockContainer'
import type { ContentBlock } from '~/types/blocks/content'
import ColumnBlock from './ColumnBlock'
import ContentHeader from './Header'
import { setContentAlignment, setContentGrid } from './styles'

const Content: React.FC<ContentBlock> = ({
  blockWIdth,
  blockPadding,
  background,
  backgroundImage,
  desktopContainerWidth,
  desktopContainerAlignment,
  desktopContentAlignment,
  headerBlockSize,
  headerBlockAlignment,
  title,
  titleTag,
  titleColor,
  subtitle,
  subtitleTag,
  subtitleColor,
  subtitlePosition,
  contentAlignment,
  content,
  columnOne,
  columnTwo
}) => {
  const containerWidth = blockWIdth === 'container' ? 'container' : 'w-full'
  const contentGrid = setContentGrid(desktopContainerWidth, desktopContainerAlignment)
  const headerContentGrid = setContentGrid(headerBlockSize, headerBlockAlignment)
  const alignment = setContentAlignment(contentAlignment!)
  const contentAligment = desktopContentAlignment === 'top' ? 'justify-start' : 'justify-center'
  let columnGrid = 'col-span-12'

  if (
    columnOne &&
    columnOne?.columnOneLayout?.length > 0 &&
    columnTwo &&
    columnTwo?.columnTwoLayout?.length
  ) {
    columnGrid = 'col-span-6'
  }

  return (
    <BlockContainer
      paddingY={blockPadding}
      background={background}
      backgroundImage={backgroundImage}
    >
      <div className={`${containerWidth} grid grid-cols-12 px-4`.trim()}>
        <div className={`${contentGrid} grid grid-cols-12`.trim()}>
          {(title || subtitle) && (
            <ContentHeader
              alignment={alignment}
              grid={headerContentGrid}
              subtitlePosition={subtitlePosition}
              title={{ title, titleTag, titleColor }}
              subtitle={{ subtitle, subtitleTag, subtitleColor }}
              content={content}
            />
          )}

          <div className='columns-container col-span-12 grid grid-cols-12'>
            {columnOne && (columnOne?.columnOneLayout?.length ?? 0) > 0 && (
              <ColumnBlock
                layout={columnOne?.columnOneLayout}
                grid={columnGrid}
                columnName={`content-column`}
                className={`flex flex-col ${contentAligment}`}
              />
            )}

            {columnTwo && (columnTwo?.columnTwoLayout?.length ?? 0) > 0 && (
              <ColumnBlock
                layout={columnTwo?.columnTwoLayout}
                grid={columnGrid}
                columnName='content-column'
                className={`flex flex-col ${contentAligment}`}
              />
            )}
          </div>
        </div>
      </div>
    </BlockContainer>
  )
}

export default Content
