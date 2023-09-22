import { json, type LoaderFunction, type V2_MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import qs from 'qs'
import Hero from '~/Hero'
import type { Alignment, Doc, Docs, HeroBlock } from '~/types/homepage'

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
            let $block = block as HeroBlock

            return (
              <Hero
                type='twoColumns'
                title={$block.title}
                description={$block.description}
                alignment={$block.alignment as Alignment}
                media={$block.media.url}
                background={$block.background}
                buttons={$block.buttons}
                effects={$block.effects}
                key={index}
              />
            )
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
