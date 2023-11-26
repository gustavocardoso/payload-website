import { isRouteErrorResponse } from '@remix-run/react'
import { useEffect } from 'react'
import image404 from '../../../../public/images/404.svg'
import image500 from '../../../../public/images/500.svg'
import Image from '../Image'

import { slots } from './styles'

const { errorContainer, errorHeading, errorStatusCode, errorText } = slots()

type ErrorProps = {
  error: unknown
}

const ErrorMessage: React.FC<ErrorProps> = error => {
  let errorStatus
  let errorMessage
  let errorImage
  let errorImageAlt

  useEffect(() => {
    document.title = 'Error | Logoipsum'
  })

  if (isRouteErrorResponse(error.error)) {
    if (error.error.status === 404) {
      errorStatus = '404'
      errorMessage = 'Page not found!'
      errorImage = image404
      errorImageAlt = '404 - Page Not Found'
    }

    if (error.error.status === 500) {
      errorStatus = '500'
      errorMessage = 'Uh oh, there seems to be a problem.'
      errorImage = image500
      errorImageAlt = '500 - Internal Server Error'
    }
  }

  if (isRouteErrorResponse(error.error)) {
    return (
      <div className={errorContainer()}>
        <h2 className={errorHeading()}>
          <span className={errorStatusCode()}>{errorStatus}</span>
          <span className={errorText()}>{errorMessage}</span>
          <span className={errorText()}>
            Let me help you find{' '}
            <a href='/' className='text-primary hover:text-primary-hover transition-colors'>
              a way out
            </a>
            .
          </span>
        </h2>
        <Image src={errorImage!} alt={errorImageAlt!} className='w-2/4 ml-4' />
      </div>
    )
  } else {
    console.error(error.error)
    return (
      <p className={`flex flex-col items-center justify-center ${errorText()}`}>
        <Image src={image500} alt='Error' className='w-full mb-8' />
        <span className='block font-bold text-dark text-4xl mb-2'>
          Oh no! An error just occurred!
        </span>{' '}
        <span className='mb-4'>Open the console for more information.</span>
        <span className={errorText()}>
          Let me help you find{' '}
          <a href='/' className='text-primary hover:text-primary-hover transition-colors'>
            a way out
          </a>
          .
        </span>
      </p>
    )
  }

  return null
}

export default ErrorMessage
