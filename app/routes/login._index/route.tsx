import type { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { Form, useActionData, useLoaderData, useRouteError } from '@remix-run/react'
import validator from 'validator'
import ErrorMessage from '~/components/Common/Error'
import { authCookie, createAccount } from '../login._index/auth'
import { validate } from '../login._index/validate'

export const meta: MetaFunction = ({ data }) => {
  return [{ title: 'Login | Logoipsum' }, { name: 'description', content: 'User Login' }]
}

type Loaderdata = {
  userId: string | null
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  let email = String(formData.get('email'))
  let password = String(formData.get('password'))

  email = validator.escape(email)
  password = validator.escape(password)

  const errors = validate(email, password)

  if (errors) {
    return json({ errors }, 400)
  }

  const user = await createAccount(email, password)

  return redirect('/login', {
    headers: {
      'Set-Cookie': await authCookie.serialize(user.id)
    }
  })
}

export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  // const cookieString = request.headers.get('Cookie')
  // let userId = await authCookie.parse(cookieString)
  let userId = null

  return json<Loaderdata>({ userId })
}

const Login = () => {
  const { userId } = useLoaderData() as Loaderdata

  let actiondata = useActionData<typeof action>()
  let emailError = actiondata?.errors?.email
  let passwordError = actiondata?.errors?.password

  return (
    <>
      <div className='bg-primary'>
        <div className='container py-28 text-center'>
          {userId ? (
            <div>
              <h1 className='text-3xl font-bold mb-4'>Welcome back, {userId}</h1>
              <form action='/logout' method='post'>
                <button
                  type='submit'
                  className='bg-primary text-white hover:bg-primary-hover py-3 px-5 rounded-lg'
                >
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <div>
              <Form
                action='/login'
                method='post'
                className='w-[500px] m-auto bg-white rounded-lg p-8'
              >
                <h2 className='text-dark text-3xl'>User Login</h2>
                <div className='flex flex-col mb-8'>
                  <label
                    className='text-lg mb-2 text-gray-dark font-normal flex items-center peer-checked:text-dark-hover'
                    htmlFor='email'
                  >
                    Email{' '}
                    {emailError && <span className='text-alert text-sm ml-2'>{emailError}</span>}
                  </label>
                  <input
                    className='rounded-lg py-3 px-4 relative focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 border-gray bg-white transition-all'
                    type='email'
                    name='email'
                    id='email'
                    required
                    autoFocus
                    autoComplete='email'
                    tabIndex={1}
                  />
                </div>

                <div className='flex flex-col mb-8'>
                  <label
                    className='text-lg mb-2 text-gray-dark font-normal flex items-center peer-checked:text-dark-hover'
                    htmlFor='password'
                  >
                    Password{' '}
                    {passwordError && (
                      <span className='text-alert text-sm ml-2'>{passwordError}</span>
                    )}
                  </label>
                  <input
                    className='rounded-lg py-3 px-4 relative focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 border-gray bg-white transition-all'
                    type='password'
                    name='password'
                    id='password'
                    required
                    tabIndex={2}
                  />
                </div>

                <button
                  type='submit'
                  className='bg-primary text-white hover:bg-primary-hover focus:outline-none focus:ring-offset-2 focus:ring-primary-hover focus:ring-2 py-3 px-5 rounded-lg'
                  tabIndex={3}
                >
                  Signup
                </button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Login

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
