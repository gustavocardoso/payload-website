import { isRouteErrorResponse } from '@remix-run/react'
import image404 from '../../../../public/images/404.svg'
import image500 from '../../../../public/images/500.svg'
import Image from '../Image'

type ErrorProps = {
  error: unknown
}

const ErrorMessage: React.FC<ErrorProps> = error => {
  if (isRouteErrorResponse(error.error)) {
    if (error.error.status === 404) {
      return (
        <div className='flex justify-center items-center w-full'>
          <h2 className='text-center mr-4'>
            <span className='block text-9xl tracking-tighter font-bold'>404</span>
            <span className='text-2xl font-normal block'>Page not found!</span>
            <span className='text-2xl font-normal block'>
              Let me help you find{' '}
              <a href='/' className='text-primary hover:text-primary-hover transition-colors'>
                a way out
              </a>
              .
            </span>
          </h2>
          <Image src={image404} alt='404 - Page Not Found' className='w-2/4 ml-4' />
        </div>
      )
    } else if (error.error.status === 500) {
      return (
        <div className='flex justify-center items-center w-full'>
          <h2 className='text-center mr-4'>
            <span className='block text-9xl tracking-tighter font-bold'>500</span>
            <span className='text-2xl font-normal block'>Uh oh, there seems to be a problem.</span>
            <span className='text-2xl font-normal block'>
              Let me help you find{' '}
              <a href='/' className='text-primary hover:text-primary-hover transition-colors'>
                a way out
              </a>
              .
            </span>
          </h2>
          <Image src={image500} alt='500 - Internal Server Error' className='w-2/4 ml-4' />
        </div>
      )
    } else {
      return <p>Unknown Error!</p>
    }
  }

  return null
}

export default ErrorMessage
