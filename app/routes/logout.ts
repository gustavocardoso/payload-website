import { redirect } from '@remix-run/node'
import { authCookie } from './login._index/auth'

export async function action() {
  return redirect('/contact', {
    headers: {
      'Set-Cookie': await authCookie.serialize('', {
        maxAge: 0
      })
    }
  })
}
