import type { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { getPage } from '~/api/pages'
import ErrorMessage from '~/components/Common/Error'
import RenderPage from '~/components/RenderPage'
import type { Doc, Docs } from '~/types/page'
import { pageQuery } from '../$page._index/queries'

export const meta: MetaFunction = ({ data }) => {
  return [
    { title: 'Blog | Logoipsum' },
    { name: 'description', content: 'Our awesome blog posts' },
    { name: 'keywords', content: 'blog, post' }
  ]
}

type Loaderdata = {
  page: Doc
}

export const action = async ({ request }: ActionFunctionArgs) => {
  // const formData = await request.formData()
  // const email = String(formData.get('email'))
  // const password = String(formData.get('password'))
  // const errors = validate(email, password)
  // if (errors) {
  //   return json({ errors }, 400)
  // }
}

export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  const {
    docs: [page]
  } = (await getPage(pageQuery('contact'))) as Docs

  if (page === undefined) {
    throw new Response(null, {
      status: 404,
      statusText: 'Page not found!'
    })
  }

  return json<Loaderdata>({ page })
}

const Contact = () => {
  const {
    page: { pageLayout }
  } = useLoaderData() as Loaderdata

  return (
    <>
      <RenderPage layout={pageLayout} />
    </>
  )
}

export default Contact

export function ErrorBoundary() {
  const error = useRouteError()

  return (
    <div className='container px-4 py-32 min-h-[calc(100vh-372px)] flex justify-center items-center'>
      <div className='flex justify-center items-center h-full w-full'>
        <ErrorMessage error={error} />
      </div>
    </div>
  )
}
