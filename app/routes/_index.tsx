import { json, type LoaderFunction, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getPage } from '~/api/pages'
import RenderPage from '~/components/RenderPage'
import type { Doc, Docs } from '~/types/homepage'
import type { MetaProps } from '~/types/meta'

export const meta: MetaFunction = ({ data }) => {
  const metaData = data as MetaProps
  return [
    { title: metaData.meta.title },
    { name: 'description', content: metaData.meta.description },
    { name: 'keywords', content: metaData.meta.keywords }
  ]
}

type Loaderdata = Doc

export const loader: LoaderFunction = async () => {
  const query = {
    slug: {
      equals: 'home'
    },
    status: {
      equals: 'published'
    }
  }

  const {
    docs: [page]
  } = (await getPage(query)) as Docs

  return page !== undefined ? json<Loaderdata>(page) : []
}

export default function Index() {
  const { pageLayout } = useLoaderData() as Loaderdata

  return <RenderPage layout={pageLayout} />
}
