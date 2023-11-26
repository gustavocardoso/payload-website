import Content from '@ui/Blocks/Content'
import Hero from '@ui/Blocks/Hero'
import type { RibbonProps as RibbonBlock } from '@ui/Blocks/Ribbon'
import Ribbon from '@ui/Blocks/Ribbon'
import type { ContentBlock } from '~/types/blocks/content'
import type { CtaBlock } from '~/types/blocks/cta'
import type { HeroBlock } from '~/types/blocks/hero'
import type { Layout } from '~/types/page'
import Cta from '../Blocks/Cta'

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
              blockData = block as RibbonBlock

              return <Ribbon {...blockData} key={index} />
              break

            case 'content-block':
              blockData = block as ContentBlock
              return <Content {...blockData} key={index} />
              break

            case 'cta-block':
              blockData = block as CtaBlock

              return <Cta {...blockData} key={index} />
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
