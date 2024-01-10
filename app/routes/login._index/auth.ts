import { createCookie, redirect } from '@remix-run/node'
import { login } from '~/api/auth'

export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  thumbnail: {
    url: string
    alt: string
    title: string
  }
}

type LoginResponse = {
  user?: User
  token?: string
  errors?: string[]
}

let secret = process.env.COOKIE_SECRET || 'default'

if (secret === 'default') {
  console.warn('🚨 No COOKIE_SECRET set, the app is insecure!')
  secret = 'default-secret'
}

export let authCookie = createCookie('auth', {
  httpOnly: true,
  path: '/',
  sameSite: 'lax',
  secrets: [secret],
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60 * 24 * 30 // 30 days
})

export const userLogin = async (
  email: string,
  password: string
): Promise<{ user?: User; token?: string; errors?: string[] }> => {
  const loginResponse: LoginResponse = await login(email, password)

  if (loginResponse.errors && Array.isArray(loginResponse.errors)) {
    return {
      errors: loginResponse.errors
    }
  }

  const { user, token } = loginResponse

  if (user && token) {
    const { id, email, firstName, lastName, role, thumbnail } = user

    return {
      user: {
        id,
        email,
        firstName,
        lastName,
        role,
        thumbnail
      },
      token
    }
  }

  throw new Error('Unexpected response from login')
}

export const requireAuthCookie = async (request: Request) => {
  const userId = await authCookie.parse(request.headers.get('Cookie'))

  if (!userId) {
    throw redirect('/contact', {
      headers: {
        'Set-Cookie': await authCookie.serialize('', {
          maxAge: 0
        })
      }
    })
  }

  return userId
}
