import { json, type LoaderFunction, type V2_MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import qs from 'qs'
import Hero from '~/Hero'
import type { Alignment, BackgroundOpacity, BackgroundTextColor, HeroType } from '~/types/hero'
import type { Doc, Docs, HeroBlock } from '~/types/homepage'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Home | Logoipsum' }, { name: 'description', content: 'Welcome to Logoipsum!' }]
}

type Loaderdata = Doc

export const loader: LoaderFunction = async () => {
  const query = {
    slug: {
      equals: 'home'
    }
  }

  const stringifiedQuery = qs.stringify(
    {
      where: query // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  )

  const pagesResponse = await fetch(`http://localhost:3000/api/pages/${stringifiedQuery}`, {
    headers: {
      Authorization: 'users API-Key 8ce2a0bd-6630-4abf-aa0a-73fdd03e9d87'
    }
  })

  const {
    docs: [page]
  } = (await pagesResponse.json()) as Docs

  return json<Loaderdata>(page)
}

export default function Index() {
  const { layout } = useLoaderData() as Loaderdata

  return (
    <>
      {layout.map((block, index) => {
        switch (block.blockType) {
          case 'hero-block':
            const blockData = block as HeroBlock
            const blockProps = {
              type: blockData.type as HeroType,
              title: blockData.title,
              titleTag: blockData.titleTag,
              description: blockData.description,
              alignment: blockData.alignment as Alignment,
              media: blockData.media.url,
              mediaAlt: blockData.media.alt,
              background: blockData.background,
              backgroundImage: blockData.backgroundImage?.url,
              backgroundOpacity: blockData.backgroundOpacity as BackgroundOpacity,
              backgroundTextColor: blockData.backgroundTextColor as BackgroundTextColor,
              buttons: blockData.buttons,
              effects: blockData.effects,
              anchor: blockData.anchor
            }

            return <Hero key={index} props={blockProps} />
            break
          case 'ribbon-block':
            return (
              <div className='container px-4 py-8' key={index}>
                <h2 className='text-4xl font-semibold'>Ribbon Block</h2>
              </div>
            )
            break
          case 'content-block':
            return (
              <div className='container px-4 py-8' key={index}>
                <h2 className='text-4xl font-semibold'>Content Block</h2>
              </div>
            )
            break

          default:
            break
        }

        return null
      })}
    </>
  )
}
