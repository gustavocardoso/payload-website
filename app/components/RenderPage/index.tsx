import Content from '@ui/Blocks/Content'
import Hero from '@ui/Blocks/Hero'
import type { RibbonProps } from '@ui/Blocks/Ribbon'
import Ribbon from '@ui/Blocks/Ribbon'
import type { ContentBlock } from '~/types/blocks/content'
import type { HeroBlock } from '~/types/blocks/hero'
import type { Layout } from '~/types/homepage'

type RenderLayoutProps = {
  layout?: Layout[]
}

const RenderPage: React.FC<RenderLayoutProps> = ({ layout }) => {
  if (layout && layout.length > 0) {
    return (
      <>
        {layout?.map((block, index) => {
          let blockData

          switch (block.blockType) {
            case 'hero-block':
              blockData = block as HeroBlock

              return <Hero key={index} props={blockData} />
              break
            case 'ribbon-block':
              blockData = block as RibbonProps

              return <Ribbon {...blockData} key={index} />
              break
            case 'content-block':
              blockData = block as ContentBlock
              return <Content {...blockData} key={index} />
              break

            default:
              return null
              break
          }
        })}
      </>
    )
  }

  return (
    <div className='container px-4 py-16'>
      <p className='text-2xl text-primary font-medium mb-0' key='001'>
        This page has no content yet!
      </p>
    </div>
  )
}

export default RenderPage
