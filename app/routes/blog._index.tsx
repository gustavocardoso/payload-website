// import type { LoaderFunction } from '@remix-run/node'
import { json, type LoaderFunction, type LoaderFunctionArgs } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData, useRouteError } from '@remix-run/react'
import type { z } from 'zod'
import { getPage } from '~/api/pages'
import type { categoriesSchema, postsSchema } from '~/api/posts'
import { getCategories, getPosts } from '~/api/posts'
import PostCard from '~/components/Cards/Post'
import CategoriesList from '~/components/CategoriesList'
import ErrorMessage from '~/components/Common/Error'
import RenderPage from '~/components/RenderPage'
import type { Doc, Docs } from '~/types/page'

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
  selectedCategory: string[] | undefined
}

type Query = {
  status: {
    equals: string
  }
  'category.slug'?: {
    in: string[]
  }
  title?: {
    contains: string
  }
}

export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  const search = new URL(request.url).searchParams.get('search')
  const searchCategories = new URL(request.url).searchParams.get('category')
  const searchCategoriesArray = searchCategories?.split(',').filter(category => category !== '')

  const pageQuery = {
    slug: {
      equals: 'blog'
    },
    status: {
      equals: 'published'
    }
  }

  const {
    docs: [page]
  } = (await getPage(pageQuery)) as Docs

  if (page === undefined) {
    throw new Response(null, {
      status: 404,
      statusText: 'Page not found!'
    })
  }

  let postsQuery: Query = {
    status: {
      equals: 'published'
    }
  }

  if (searchCategoriesArray?.length) {
    postsQuery['category.slug'] = {
      in: searchCategoriesArray
    }
  }

  if (search !== '') {
    postsQuery['title'] = {
      contains: search!
    }
  }

  const posts = await getPosts(postsQuery)
  const categories = await getCategories()

  return json<Loaderdata>({ page, posts, categories, selectedCategory: searchCategoriesArray })
}

const Blog = () => {
  const {
    page: { pageLayout },
    posts: { docs: posts },
    categories: { docs: categories },
    selectedCategory
  } = useLoaderData() as Loaderdata

  return (
    <>
      <RenderPage layout={pageLayout} />

      <div className='container px-4 py-28'>
        <CategoriesList categories={categories} selectedCategory={selectedCategory} />

        <div className='blog-list-wrapper grid grid-cols-12 gap-16'>
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
