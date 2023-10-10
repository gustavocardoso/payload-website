import BlockContainer from '@ui/BlockContainer'
import type { HeadingAligment } from '~/components/Common/Heading'
import Heading from '~/components/Common/Heading'
import ContentSerialize from '~/components/ContentSerialize'
import type { ContentBlock } from '~/types/blocks/content'
import CopyBlock from './ContentBlocks/CopyBlock'
import ImageBlock from './ContentBlocks/ImageBlock'
import { setContentAlignment, setContentGrid } from './styles'

const Content: React.FC<ContentBlock> = ({
  blockWIdth,
  blockPadding,
  background,
  backgroundImage,
  desktopContainerWidth,
  desktopContainerAlignment,
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
  const titlePosition = subtitlePosition === 'below' ? 'order-1' : 'order-2'
  const subTitlePosition = subtitlePosition === 'below' ? 'order-2' : 'order-1'
  const alignment = setContentAlignment(contentAlignment!)

  return (
    <BlockContainer
      paddingY={blockPadding}
      background={background}
      backgroundImage={backgroundImage}
    >
      <div className={`${containerWidth} grid grid-cols-12`.trim()}>
        <div className={`${contentGrid} grid grid-cols-12 mb-32`.trim()}>
          {(title || subtitle) && (
            <div
              className={`content-header flex flex-col ${alignment} ${headerContentGrid}`.trim()}
            >
              {title !== undefined && (
                <Heading
                  tag={titleTag!}
                  content={title}
                  color={titleColor}
                  alignment={alignment as HeadingAligment}
                  className={`${titlePosition}`.trim()}
                />
              )}

              {subtitle !== undefined && (
                <Heading
                  tag={subtitleTag!}
                  content={subtitle}
                  color={subtitleColor}
                  alignment={alignment as HeadingAligment}
                  textStyle='uppercase'
                  className={`${subTitlePosition}`.trim()}
                />
              )}

              <div className='block-content order-3 mt-4'>
                <ContentSerialize content={content} />
              </div>
            </div>
          )}

          <div className='col-span-12'>
            {(columnOne?.layout?.length ?? 0) > 0 && (
              <div className='column-one'>
                {columnOne?.layout.map((block, index) => {
                  if (!block) return null
                  console.log(block)
                  switch (block.blockType) {
                    case 'image-block':
                      return <ImageBlock key={index} {...block.image} caption={block.caption} />
                    case 'copy-block':
                      return <CopyBlock copy={block.copy} key={index} />
                      break
                    case 'heading-block':
                      return (
                        <Heading
                          tag={block.tag}
                          content={block.content}
                          textStyle={block.textStyle}
                          alignment={block.alignment}
                          key={index}
                        />
                      )
                      break
                    default:
                      break
                  }
                  return null
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </BlockContainer>
  )
}

export default Content
