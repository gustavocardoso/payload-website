import type { z } from 'zod'
import type { postsSchema } from '~/api/posts'

// type Category = {
//   id: string
//   title: string
// }

// type ImageSize = {
//   url: string
//   width: number
//   height: number
// }

// type WebpImage = {
//   url?: string
//   sizes?: {
//     blog?: ImageSize
//     card?: ImageSize
//   }
// }

// type Image = {
//   webp?: WebpImage
//   sizes?: {
//     blog?: ImageSize
//     card?: ImageSize
//   }
//   url?: string
//   alt?: string
//   title?: string
// }

export type PostType = z.infer<typeof postsSchema>

export type Post = PostType['docs'][0]
