import { json, type LoaderFunction } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { getPage } from '~/api/pages'
import ErrorMessage from '~/components/Common/Error'
import RenderPage from '~/components/RenderPage'
import type { Doc, Docs } from '~/types/page'

import type { MetaProps } from '~/types/meta'
import { pageQuery } from './queries'

export const meta: MetaFunction = ({ data }) => {
  const metaData = data as MetaProps
  return [
    { title: metaData?.page?.meta?.title ? metaData?.page?.meta?.title : metaData?.title },
    { name: 'description', content: metaData?.page?.meta?.description || '' },
    { name: 'keywords', content: metaData?.page?.meta?.keywords || '' }
  ]
}

type Loaderdata = Doc

export const loader: LoaderFunction = async ({ params }) => {
  const {
    docs: [page]
  } = (await getPage(pageQuery(params.page!))) as Docs

  if (page === undefined) {
    throw new Response(null, {
      status: 404,
      statusText: 'Page not found!'
    })
  }

  return json<Loaderdata>(page, {
    headers: {
      'Cache-Control': 'public, max-age=60'
    }
  })
}

const Page = () => {
  const { pageLayout } = useLoaderData() as Loaderdata

  return <RenderPage layout={pageLayout} />
}

export default Page

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='container px-4 py-32 min-h-[calc(100vh-372px)] flex justify-center items-center'>
      <div className='flex justify-center items-center h-full w-full'>
        <ErrorMessage error={error} />
      </div>
    </div>
  )
}
