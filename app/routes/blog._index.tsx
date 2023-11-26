// import type { LoaderFunction } from '@remix-run/node'
import { json, type LoaderFunction } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData, useRouteError } from '@remix-run/react'
import type { z } from 'zod'
import { getPage } from '~/api/pages'
import type { postSchema } from '~/api/posts'
import { getPosts } from '~/api/posts'
import PostCard from '~/components/Cards/Post'
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
  posts: z.infer<typeof postSchema>
}

export const loader: LoaderFunction = async ({ params }) => {
  const query = {
    slug: {
      equals: 'blog'
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

  const postsQuery = {
    status: {
      equals: 'published'
    }
  }

  const posts = await getPosts(postsQuery)

  return json<Loaderdata>({ page, posts })
}

const Blog = () => {
  const {
    page: { pageLayout },
    posts: { docs: posts }
  } = useLoaderData() as Loaderdata

  return (
    <>
      <RenderPage layout={pageLayout} />

      <div className='container px-4 py-28'>
        <div className='container px-4 py-28'>
          <div className='blog-list-wrapper grid grid-cols-12 gap-16'>
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
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
