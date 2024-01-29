import type { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import { useActionData, useLoaderData, useNavigation, useRouteError } from '@remix-run/react'
import React, { useEffect, useRef } from 'react'
import { createContact } from '~/api/contact'
import { getPage } from '~/api/pages'
import ErrorMessage from '~/components/Common/Error'
import RenderPage from '~/components/RenderPage'
import type { MetaProps } from '~/types/meta'
import type { Doc, Docs } from '~/types/page'
import { pageQuery } from '../$page._index/queries'

import ContactForm from '~/components/Forms/Contact/Contact'
import { contactFormSchema } from './schema'
import { validateForm } from './validate'

export const meta: MetaFunction = ({ data }) => {
  const metaData = data as MetaProps
  return [
    { title: metaData?.page?.meta?.title ? metaData?.page?.meta?.title : metaData?.title },
    { name: 'description', content: metaData?.page?.meta?.description || '' },
    { name: 'keywords', content: metaData?.page?.meta?.keywords || '' }
  ]
}

type Loaderdata = {
  page: Doc
}

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
  }>({ request, schema: contactFormSchema })

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

  return json<Loaderdata>(
    { page },
    {
      headers: {
        'Cache-Control': 'public, max-age=3600'
      }
    }
  )
}

const Contact = () => {
  const {
    page: { pageLayout }
  } = useLoaderData() as Loaderdata

  const navigation = useNavigation()
  const actionData = useActionData<typeof action>()
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

            <ContactForm formRef={formRef} isSubmitting={isSubmitting} actionData={actionData!} />
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
