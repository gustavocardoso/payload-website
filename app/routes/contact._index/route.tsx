import type { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { Form, useActionData, useLoaderData, useNavigation, useRouteError } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import MaskedInput from 'react-text-mask'
import { z } from 'zod'
import { createContact } from '~/api/contact'
import { getPage } from '~/api/pages'
import ErrorMessage from '~/components/Common/Error'
import RenderPage from '~/components/RenderPage'
import type { Doc, Docs } from '~/types/page'
import { pageQuery } from '../$page._index/queries'
import { phoneMask } from '../../utils/input-masks'
import inputStyles, { slots } from './styles'
import { validateForm } from './validate'

const { label, submitButtonIdle, submitButtonSubmitting } = slots()

export const meta: MetaFunction = ({ data }) => {
  return [
    { title: 'Contact | Logoipsum' },
    {
      name: 'description',
      content:
        'Contact LogoIpsum today! We are an approachable team of upgrade genies ready to make your NAV to Business Central transition seamless.'
    },
    { name: 'keywords', content: 'blog, post' }
  ]
}

type Loaderdata = {
  page: Doc
}

const schema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(2, 'First name must be at least 2 characters long'),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(2, 'Last name must be at least 2 characters long'),
  email: z.string({ required_error: 'Email is required' }).email('Email is invalid'),
  phoneNumber: z
    .string({ required_error: 'Phone number is required' })
    .refine(value => /^\(\d{3}\) \d{3}-\d{4}$/.test(value), {
      message: 'Phone number must be in format (999) 999-9999'
    }),
  company: z
    .string({ required_error: 'Company name is required' })
    .min(2, 'Company name is invalid'),
  message: z.string({ required_error: 'Message is required' }).min(2, 'Message is invalid')
})

type actionData = {
  success?: boolean
  errors: Partial<
    Record<'firstName' | 'lastName' | 'email' | 'message' | 'phoneNumber' | 'company', string>
  > | null
  apiError?: boolean
}

export const action = async ({ request }: ActionFunctionArgs): Promise<actionData> => {
  const { formData, errors } = await validateForm<{
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    company: string
    message: string
  }>({ request, schema })

  if (errors) {
    return { success: false, errors }
  }

  const { firstName, lastName, email, phoneNumber, company, message } = formData
  const contact = await createContact({ firstName, lastName, email, phoneNumber, company, message })

  if (contact?.errors?.length > 0) {
    console.error(contact.errors)
    return { success: false, errors: null, apiError: true }
  }

  return { success: true, errors: null }
}

export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  const {
    docs: [page]
  } = (await getPage(pageQuery('contact'))) as Docs

  if (page === undefined) {
    throw new Response(null, {
      status: 404,
      statusText: 'Page not found!'
    })
  }

  return json<Loaderdata>({ page })
}

const Contact = () => {
  const {
    page: { pageLayout }
  } = useLoaderData() as Loaderdata

  const navigation = useNavigation()
  const actionData = useActionData<typeof action>()
  const apiError = actionData?.apiError
  const firstNameError = actionData?.errors?.firstName
  const lastNameError = actionData?.errors?.lastName
  const emailError = actionData?.errors?.email
  const phoneNumberError = actionData?.errors?.phoneNumber
  const companyError = actionData?.errors?.company
  const messageError = actionData?.errors?.message
  const isSubmitting = navigation.state === 'submitting'
  const success = actionData?.success
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (success) {
      formRef.current?.reset()
    }
  }, [success])

  return (
    <>
      <RenderPage layout={pageLayout} />

      <div className='container px-4 py-28'>
        {success ? (
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-center'>Thank you!</h1>
            <p className='text-center mt-4'>
              We will get back to you as soon as possible.
              <br />
              If you need immediate assistance, please call us at{' '}
              <a href='tel:1-800-123-4567'>1-800-123-4567</a>
            </p>
          </div>
        ) : (
          <div className='w-2/3 m-auto'>
            <div className='text-center'>
              <h3 className='font-semibold mb-4'>Let us know how we can help you today!</h3>
              <p className='mb-0'>
                Don't worry - you won't get sucked into a long, boring sales pitch. We're just
                straight-shooting, approachable upgrade genies here to grant your cloud wishes.
              </p>
            </div>

            <div className='w-4/5 m-auto py-10 px-4'>
              {apiError && (
                <p className='text-alert text-base mb-2 font-medium'>
                  * Something went wrong, please try again.
                </p>
              )}

              {firstNameError && (
                <p className='text-alert text-base mb-2 font-medium'>* {firstNameError}</p>
              )}

              {lastNameError && (
                <p className='text-alert text-base mb-2 font-medium'>* {lastNameError}</p>
              )}

              {emailError && (
                <p className='text-alert text-base mb-2 font-medium'>* {emailError}</p>
              )}

              {phoneNumberError && (
                <p className='text-alert text-base mb-2 font-medium'>* {phoneNumberError}</p>
              )}

              {companyError && (
                <p className='text-alert text-base mb-2 font-medium'>* {companyError}</p>
              )}

              {messageError && (
                <p className='text-alert text-base mb-2 font-medium'>* {messageError}</p>
              )}
            </div>

            <div className='flex justify-center items-center'>
              <Form method='post' action='/contact' className='w-4/5' ref={formRef}>
                <input type='hidden' name='intent' value='createContact' />
                <div className='flex gap-4 mb-6'>
                  <div className='flex-1'>
                    <label htmlFor='lastName' className={label()}>
                      First Name <span className='text-alert inline-block ml-1'>*</span>
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      className={inputStyles({ error: !!firstNameError })}
                      tabIndex={1}
                      required
                    />
                  </div>

                  <div className='flex-1'>
                    <label htmlFor='lastName' className={label()}>
                      Last Name <span className='text-alert inline-block ml-1'>*</span>
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      className={inputStyles({ error: !!lastNameError })}
                      tabIndex={2}
                      required
                    />
                  </div>
                </div>

                <div className='flex gap-4 mb-6'>
                  <div className='flex-1'>
                    <label htmlFor='email' className={label()}>
                      Business Email <span className='text-alert inline-block ml-1'>*</span>
                    </label>
                    <input
                      type='email'
                      name='email'
                      className={inputStyles({ error: !!emailError })}
                      tabIndex={3}
                      required
                    />
                  </div>

                  <div className='flex-1'>
                    <label htmlFor='phoneNumber' className={label()}>
                      Phone Number <span className='text-alert inline-block ml-1'>*</span>
                    </label>
                    <MaskedInput
                      mask={phoneMask()}
                      guide={false}
                      type='tel'
                      name='phoneNumber'
                      className={inputStyles({ error: !!phoneNumberError })}
                      placeholder='(999) 999-9999'
                      tabIndex={4}
                      required
                    />
                  </div>
                </div>

                <div className='w-full mb-6'>
                  <label htmlFor='company' className={label()}>
                    Company Name <span className='text-alert inline-block ml-1'>*</span>
                  </label>
                  <input
                    type='text'
                    name='company'
                    className={`${inputStyles({ error: !!companyError })} w-full`}
                    tabIndex={5}
                  />
                </div>

                <div className='w-full mb-6'>
                  <label htmlFor='message' className={label()}>
                    Message <span className='text-alert inline-block ml-1'>*</span>
                  </label>
                  <textarea
                    name='message'
                    className={`${inputStyles({ error: !!messageError })} w-full`}
                    tabIndex={6}
                  ></textarea>
                </div>

                <div className='flex items-center'>
                  <button
                    type='submit'
                    className={`${isSubmitting ? submitButtonSubmitting() : submitButtonIdle()}`}
                    tabIndex={6}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>

                  {isSubmitting && (
                    <svg
                      className='animate-spin ml-4 h-7 w-7 text-dark'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  )}
                </div>
              </Form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Contact

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
