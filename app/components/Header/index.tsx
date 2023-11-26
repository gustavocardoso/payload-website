import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'
import type { MenuItems } from '~/types/menu'
import type { siteOptionsProps } from '~/types/site-options'
import Button from '../Button'
import Image from '../Common/Image'
import Navigation from '../Navigation'

type Props = {
  menuItems: MenuItems[]
  logo: {
    url: string
    alt: string
  }
  siteOptions: siteOptionsProps
}

const Header: React.FC<Props> = ({ menuItems, logo, siteOptions }) => {
  return (
    <header className='relative z-20'>
      <nav className='bg-dark'>
        <div className='container px-4 py-8 gap-x-16 grid grid-cols-12'>
          <Link to='/' className='col-span-2 flex items-center' unstable_viewTransition>
            <Image src={logo.url} alt={logo.alt} className='w-44 h-auto' width='176' />
          </Link>

          <Navigation menuItems={menuItems} />

          <div className='col-span-2 flex items-center'>
            <Button href='/demo' color='button-highlight' textStyle='uppercase'>
              Get a Demo
              {siteOptions.fontAwesome && <i className='fa-solid fa-arrow-right-long'></i>}
              {!siteOptions.fontAwesome && <ArrowLongRightIcon className='w-6' />}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
