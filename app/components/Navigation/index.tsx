import { Link } from '@remix-run/react'
import type { MenuItems } from '~/types/menu'

type Props = {
  menuItems: MenuItems[]
}

const Navigation: React.FC<Props> = ({ menuItems }) => {
  return (
    <ul className='col-span-8 items-center flex justify-center gap-x-10 text-lg'>
      {menuItems &&
        menuItems.map(item => (
          <li key={item.href} className='table-cell'>
            <Link
              className='table text-light font-medium transition-all hover:text-primary
              after:content-[""] after:block after:h-[3px] after:bg-light after:w-0 after:opacity-0 hover:after:w-full hover:after:opacity-100 after:transition-all after:duration-500'
              to={item.href}
              prefetch='intent'
            >
              {item.label}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Navigation
