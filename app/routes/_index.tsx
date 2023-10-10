import { json, type LoaderFunction, type V2_MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Content from '@ui/Blocks/Content'
import Hero from '@ui/Blocks/Hero'
import type { RibbonProps } from '@ui/Blocks/Ribbon'
import Ribbon from '@ui/Blocks/Ribbon'
import qs from 'qs'
import type { ContentBlock } from '~/types/blocks/content'
import type { HeroBlock } from '~/types/blocks/hero'
import type { Doc, Docs } from '~/types/homepage'

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
            // console.log(block)
            blockData = block as ContentBlock
            return <Content {...blockData} key={index} />
            break

          default:
            break
        }

        return null
      })}
    </>
  )
}
