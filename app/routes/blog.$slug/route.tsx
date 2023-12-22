import { json, type LoaderFunction } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useLoaderData, useOutletContext, useRouteError } from '@remix-run/react'
import { useEffect, useState } from 'react'
import type { z } from 'zod'
import type { postSchema } from '~/api/posts'
import { getPost } from '~/api/posts'
import Hero from '~/components/Blocks/Hero'
import ErrorMessage from '~/components/Common/Error'
import PostAside from '~/components/Post/Aside'
import PostContent from '~/components/Post/Content'
import type { siteOptionsProps } from '~/types/site-options'
import { countWordsInPostContent, estimateReadingTime } from '~/utils/strings'

export const meta: MetaFunction = ({ data }) => {
  return [
    { title: 'Blog | Logoipsum' },
    { name: 'description', content: 'Our awesome blog posts' },
    { name: 'keywords', content: 'blog, post' }
  ]
}

type Loaderdata = z.infer<typeof postSchema>

export const loader: LoaderFunction = async ({ params }) => {
  const query = {
    slug: {
      equals: params.slug
    },
    status: {
      equals: 'published'
    }
  }

  const post = await getPost(query)

  if (post === undefined) {
    throw new Response(null, {
      status: 404,
      statusText: 'Page not found!'
    })
  }

  return json<Loaderdata>(post)
}

const Blog = () => {
  const {
    docs: [post]
  } = useLoaderData() as Loaderdata
  const [readingTime, setreadingTime] = useState(0)
  const siteOptions = useOutletContext<siteOptionsProps>()
  const categories = post.category.map(cat => cat.title)

  let image

  if (post.postImage?.webp?.sizes?.blog?.url) {
    image = post.postImage.webp.sizes?.blog?.url
  } else if (!post.postImage?.webp?.sizes?.blog?.url && post.postImage?.url) {
    image = post.postImage.sizes?.blog?.url
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const postContent = document.querySelector('.post-content')
      const words = countWordsInPostContent(postContent!)
      setreadingTime(estimateReadingTime(words!))
    }
  }, [])

  return (
    <>
      <Hero
        props={{
          type: 'page',
          alignment: 'center',
          background: 'light',
          title: post.title,
          titleTag: 'h1',
          page: 'Blog',
          pageUrl: '/blog'
        }}
      />

      <div className='container px-4 py-28'>
        <article className='grid grid-cols-12'>
          <PostContent
            image={image}
            imageAlt={post.postImage?.alt}
            layout={post.layout}
            className='order-2 col-span-9 pl-4'
          />

          <PostAside
            publishedDate={post.publishedDate}
            siteOptions={siteOptions}
            categories={categories as []}
            readingTime={readingTime}
            className='order-1 col-span-3 pr-4'
          />
        </article>
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
