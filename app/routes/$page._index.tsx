// import type { LoaderFunction } from '@remix-run/node'
import { json, type LoaderFunction } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData } from '@remix-run/react'
import { getPage } from '~/api/pages'
import RenderPage from '~/components/RenderPage'
import type { Doc, Docs } from '~/types/homepage'

import type { MetaProps } from '~/types/meta'

export const meta: MetaFunction = ({ data }) => {
  const metaData = data as MetaProps
  return [
    { title: metaData?.meta?.title },
    { name: 'description', content: metaData?.meta?.description },
    { name: 'keywords', content: metaData?.meta?.keywords }
  ]
}

type Loaderdata = Doc

export const loader: LoaderFunction = async ({ params }) => {
  const query = {
    slug: {
      equals: params.page
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

const Page = () => {
  const { pageLayout } = useLoaderData() as Loaderdata

  return <RenderPage layout={pageLayout} />
}

export default Page
