import { Link } from '@remix-run/react'
import type { MenuItems } from '~/types/menu'

type Props = {
  menuItems: MenuItems[]
}

const Navigation: React.FC<Props> = ({ menuItems }) => {
  return (
    <ul className='col-span-8 items-center flex justify-center gap-x-16 text-lg'>
      {menuItems &&
        menuItems.map(item => (
          <li key={item.href} className='relative group submenu'>
            <Link
              className='submenu-link relative table text-light font-medium transition-all hover:text-primary
              after:content-[""] after:block after:h-[3px] after:bg-light after:w-0 after:opacity-0 hover:after:w-full hover:after:opacity-100 after:transition-all after:duration-500'
              to={item.href}
              prefetch='intent'
            >
              {item.label}
            </Link>

            <ul className='absolute -left-10 flex flex-col bg-dark rounded-lg px-6 py-8 min-w-max opacity-0 group-hover:opacity-100 transition-opacity gap-y-4 pointer-events-none group-hover:pointer-events-auto -translate-y-4 group-hover:translate-y-0 [transition:opacity_.2s_linear,transform_.3s_ease]'>
              <li>
                <a
                  href='#'
                  className='text-light border-l-4 border-dark px-4 transition-all duration-300 hover:text-primary hover:border-highlight'
                >
                  Our Apps
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light border-l-4 border-dark px-4 transition-all duration-300 hover:text-primary hover:border-highlight'
                >
                  Talk to an Agent
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light border-l-4 border-dark px-4 transition-all duration-300 hover:text-primary hover:border-highlight'
                >
                  Read Our Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light border-l-4 border-dark px-4 transition-all duration-300 hover:text-primary hover:border-highlight'
                >
                  Costumer Stories
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-light border-l-4 border-dark px-4 transition-all duration-300 hover:text-primary hover:border-highlight'
                >
                  Resources
                </a>
              </li>
            </ul>
          </li>
        ))}
    </ul>
  )
}

export default Navigation
