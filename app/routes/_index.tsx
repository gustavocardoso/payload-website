import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { json, type LoaderFunction, type MetaFunction } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { getPage } from '~/api/pages'
import RenderPage from '~/components/RenderPage'
import type { Doc, Docs } from '~/types/homepage'
import type { MetaProps } from '~/types/meta'

export const meta: MetaFunction = ({ data = {} }) => {
  const metaData = data as MetaProps

  const defaultTitle = 'Logoipsum.com'
  const defaultDescription = 'The website description'
  const defaultKeywords = 'logoipsum'

  return [
    { title: metaData?.meta?.title || defaultTitle },
    { name: 'description', content: metaData?.meta?.description || defaultDescription },
    { name: 'keywords', content: metaData?.meta?.keywords || defaultKeywords }
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

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)
  return (
    <div className='container px-4 py-32 min-h-[calc(100vh-372px)]'>
      <div className='bg-alert/20 border border-alert/50 rounded-lg p-8'>
        <h2 className='mb-8 text-alert flex items-center text-3xl font-medium'>
          <strong>Oh no! Something went wrong!</strong>
        </h2>

        <p className='mb-0 text-lg text-alert flex items-center'>
          <ExclamationCircleIcon className='h-8 w-8 mr-2' /> {`${error}`}
        </p>
      </div>
    </div>
  )
}
