// import type { LoaderFunction } from '@remix-run/node'
import { json, type LoaderFunction } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { getPage } from '~/api/pages'
import ErrorMessage from '~/components/Common/Error'
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

  if (page === undefined) {
    throw new Response(null, {
      status: 404,
      statusText: 'Page not found!'
    })
  }

  return json<Loaderdata>(page)
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
