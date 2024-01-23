import { z } from 'zod'
import { createZodFetcher } from 'zod-fetch'

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string(),
  thumbnail: z
    .object({
      url: z.string().nullable().optional(),
      alt: z.string().nullable().optional(),
      title: z.string().nullable().optional()
    })
    .nullable()
    .optional()
    .or(z.string().nullable().optional())
})

export const cmsUserSchema = z.object({
  user: z
    .object({
      id: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      role: z.string(),
      thumbnail: z
        .object({
          url: z.string().nullable().optional(),
          alt: z.string().nullable().optional(),
          title: z.string().nullable().optional()
        })
        .nullable()
        .optional()
        .or(z.string().nullable().optional())
    })
    .nullable()
    .optional()
})

const fetcher = createZodFetcher()

export const getUser = async (id: string) => {
  try {
    return await fetcher(userSchema, `${process.env.API_URL}/users/${id}?depth=2`, {
      headers: {
        Authorization: `users API-Key ${process.env.API_KEY}`
      }
    })
  } catch (error) {
    return undefined
  }
}

export const getCmsLoggedUser = async (cmsURL: string) => {
  try {
    return await fetcher(cmsUserSchema, `${cmsURL}/users/me`, {
      method: 'get',
      credentials: 'include'
    })
  } catch (error) {
    return undefined
  }
}
