import { json, redirect, type ActionFunction, type LoaderFunctionArgs } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData, useRouteError } from '@remix-run/react'
import type { z } from 'zod'
import { getPage } from '~/api/pages'
import type { categoriesSchema, postsSchema } from '~/api/posts'
import { getCategories, getPosts } from '~/api/posts'
import PostCard from '~/components/Cards/Post'
import ErrorMessage from '~/components/Common/Error'
import RenderPage from '~/components/RenderPage'
import Search from '~/components/Search'
import type { Doc, Docs } from '~/types/page'
import { postsQuery } from './queries'
import { setSearchUrl } from './search'

import { pageQuery } from '../$page._index/queries'
// import { requireAuthCookie } from '../login._index/auth'
import { slots } from './styles'

const { blogListContainer, blogList } = slots()

export const meta: MetaFunction = ({ data }) => {
  return [
    { title: 'Blog | Logoipsum' },
    { name: 'description', content: 'Our awesome blog posts' },
    { name: 'keywords', content: 'blog, post' }
  ]
}

type Loaderdata = {
  page: Doc
  posts: z.infer<typeof postsSchema>
  categories: z.infer<typeof categoriesSchema>
  selectedCategories: string[] | undefined
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const search = String(formData.get('search'))
  const categories = formData.getAll('category')
  const searchUrl = setSearchUrl(search, categories)

  return redirect(searchUrl)
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // await requireAuthCookie(request)
  const search = new URL(request.url).searchParams.get('search')
  const searchCategories = new URL(request.url).searchParams.get('category')
  const searchCategoriesArray = searchCategories?.split(',').filter(category => category !== '')

  const {
    docs: [page]
  } = (await getPage(pageQuery('blog'))) as Docs

  if (page === undefined) {
    throw new Response(null, {
      status: 404,
      statusText: 'Page not found!'
    })
  }

  const posts = await getPosts(postsQuery(search!, searchCategoriesArray!))
  const categories = await getCategories()

  return json<Loaderdata>({ page, posts, categories, selectedCategories: searchCategoriesArray })
}

const Blog = () => {
  const {
    page: { pageLayout },
    posts: { docs: posts },
    categories: { docs: categories },
    selectedCategories
  } = useLoaderData() as Loaderdata

  return (
    <>
      <RenderPage layout={pageLayout} />

      <div className={blogListContainer()}>
        <div className='mb-24'>
          <Search categories={categories} selectedCategories={selectedCategories} />
        </div>

        <div className={blogList()}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog

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
