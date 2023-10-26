import CopyBlock from '@ui/Blocks/Content/ContentBlocks/CopyBlock'
import ImageBlock from '@ui/Blocks/Content/ContentBlocks/ImageBlock'
import Heading from '@ui/Common/Heading'
import type { BlockLayout } from '~/types/blocks/content'
import IconsBlock from '../ContentBlocks/IconsBlock'
import QuoteBlock from '../ContentBlocks/QuoteBlock'

type ColumnBlockProps = {
  layout: BlockLayout
  grid: string
  columnName: 'column-one' | 'column-two' | 'content-column'
  className?: string
}

const ColumnBlock: React.FC<ColumnBlockProps> = ({ layout, grid, columnName, className }) => {
  return (
    <div className={`${columnName} ${grid} ${className}`.trim()}>
      {layout.map((block, index) => {
        if (!block) return null
        console.log(block)
        switch (block.blockType) {
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

          case 'image-block':
            return <ImageBlock key={index} image={block.image} caption={block.caption} />
            break

          case 'icons-block':
            return <IconsBlock key={index} {...block} />
            break

          case 'quote-block':
            return <QuoteBlock key={index} {...block} />
            break

          default:
            break
        }
        return null
      })}
    </div>
  )
}

export default ColumnBlock
