import { Link } from '@remix-run/react'
import type { MenuItems } from '~/types/menu'
import logo from '../../../public/images/logoipsum.svg'
import Button from '../Button'
import Image from '../Common/Image'
import Navigation from '../Navigation'

type Props = {
  menuItems: MenuItems[]
}

const Header: React.FC<Props> = ({ menuItems }) => {
  return (
    <header className='relative z-20'>
      <nav className='bg-dark'>
        <div className='container px-4 py-8 gap-x-16 grid grid-cols-12'>
          <Link to='/' className='col-span-2 flex items-center' unstable_viewTransition>
            <Image src={logo} alt='Logoipsum' className='w-44' />
          </Link>

          <Navigation menuItems={menuItems} />

          <div className='col-span-2 flex items-center'>
            <Button href='/demo' color='button-highlight' textStyle='uppercase'>
              Get a Demo
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
