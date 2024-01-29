import { Form } from '@remix-run/react'
import { phoneMask } from '@utils/input-masks'
import { useEffect, useState, type RefObject } from 'react'
import InputMask from 'react-input-mask'
import inputStyles, { slots } from './styles'
const { label, submitButtonIdle, submitButtonSubmitting } = slots()

type ContactFormProps = {
  formRef: RefObject<HTMLFormElement>
  isSubmitting: boolean
  actionData: {
    success?: boolean
    errors: Partial<
      Record<'firstName' | 'lastName' | 'email' | 'message' | 'phoneNumber' | 'company', string>
    > | null
    apiError?: boolean
  }
}

const ContactForm = ({ formRef, isSubmitting, actionData }: ContactFormProps) => {
  const apiError = actionData?.apiError
  const firstNameError = actionData?.errors?.firstName
  const lastNameError = actionData?.errors?.lastName
  const emailError = actionData?.errors?.email
  const phoneNumberError = actionData?.errors?.phoneNumber
  const companyError = actionData?.errors?.company
  const messageError = actionData?.errors?.message

  const [showMask, setShowMask] = useState(false)
  useEffect(() => {
    setShowMask(true)
  }, [])

  return (
    <>
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

        {emailError && <p className='text-alert text-base mb-2 font-medium'>* {emailError}</p>}

        {phoneNumberError && (
          <p className='text-alert text-base mb-2 font-medium'>* {phoneNumberError}</p>
        )}

        {companyError && <p className='text-alert text-base mb-2 font-medium'>* {companyError}</p>}

        {messageError && <p className='text-alert text-base mb-2 font-medium'>* {messageError}</p>}
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
              {showMask ? (
                <InputMask
                  mask={phoneMask()}
                  type='tel'
                  name='phoneNumber'
                  className={inputStyles({ error: !!phoneNumberError })}
                  placeholder='(999) 999-9999'
                  tabIndex={4}
                  required
                />
              ) : (
                <input
                  type='tel'
                  name='phoneNumber'
                  className={inputStyles({ error: !!phoneNumberError })}
                  placeholder='(999) 999-9999'
                  tabIndex={4}
                  required
                />
              )}
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
    </>
  )
}

export default ContactForm
