import qs from 'qs'
import { z } from 'zod'
import { createZodFetcher } from 'zod-fetch'

export const Layout = z.object({
  id: z.string(),
  blockType: z
    .literal('hero-block')
    .or(z.literal('ribbon-block'))
    .or(z.literal('content-block'))
    .or(z.literal('cta-block'))
})

export const postSchema = z.object({
  docs: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      excerpt: z.string().optional(),
      postImage: z
        .object({
          webp: z
            .object({
              sizes: z
                .object({
                  blog: z
                    .object({
                      url: z.string().optional(),
                      width: z.number().nullable(),
                      height: z.number().nullable()
                    })
                    .nullable(),
                  card: z
                    .object({
                      url: z.string().optional(),
                      width: z.number().nullable(),
                      height: z.number().nullable()
                    })
                    .nullable()
                })
                .optional()
            })
            .optional(),
          sizes: z
            .object({
              blog: z
                .object({
                  url: z.string().optional(),
                  width: z.number().nullable(),
                  height: z.number().nullable()
                })
                .nullable(),
              card: z
                .object({
                  url: z.string().optional(),
                  width: z.number().nullable(),
                  height: z.number().nullable()
                })
                .nullable()
            })
            .optional(),
          url: z.string().optional(),
          alt: z.string().optional(),
          title: z.string().optional()
        })
        .optional(),
      status: z.string(),
      slug: z.string(),
      author: z.object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string()
      }),
      publishedDate: z.string().transform(date => new Date(date).toLocaleDateString('en-CA')),
      createdAt: z.string().transform(date => new Date(date).toLocaleDateString('en-CA')),
      updatedAt: z.string().transform(date => new Date(date).toLocaleDateString('en-CA')),
      meta: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.object({}).optional(),
        keywords: z.string().optional()
      }),
      layout: z.array(Layout),
      category: z.array(
        z.object({
          id: z.string().optional().nullable(),
          title: z.string().optional().nullable()
        })
      )
    })
  )
})

const fetcher = createZodFetcher()

export const getPosts = async (query: unknown) => {
  const stringifiedQuery = qs.stringify(
    {
      where: query,
      limit: 10
    },
    { addQueryPrefix: true }
  )

  const posts = await fetcher(postSchema, `${process.env.API_URL}/posts/${stringifiedQuery}`, {
    headers: {
      Authorization: `users API-Key ${process.env.API_KEY}`
    }
  })

  return posts
}
