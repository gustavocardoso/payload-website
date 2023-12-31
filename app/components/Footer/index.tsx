import { Link } from '@remix-run/react'
import type { Props, socialTypes } from '~/types/footer'
import Image from '../Common/Image'
import SocialIcon from '../SocialIcon'

const Footer: React.FC<Props> = ({
  props: { copyright, logoUrl, logoAltText, menu },
  socialLinks,
  siteOptions
}) => {
  const socialType: socialTypes = siteOptions.fontAwesome ? 'fa' : 'regular'

  return (
    <footer className='bg-dark text-light py-16'>
      <div className='container px-4 flex flex-col gap-y-12'>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 text-left flex justify-start'>
            <Link to='/'>
              {logoUrl ? <Image className='h-8' src={logoUrl} alt={logoAltText} /> : 'Logoipsum'}
            </Link>
          </div>

          <ul className='text-base col-span-8 flex justify-center items-center gap-x-10'>
            {menu &&
              menu.map((item, index) => (
                <li key={index}>
                  <Link
                    className='text-primary transition-colors hover:text-white after:content-[""] after:block after:h-[3px] after:bg-primary after:w-0 after:opacity-0 hover:after:w-full hover:after:opacity-100 after:transition-all after:duration-500'
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          <div className='col-span-2 flex gap-8 items-center text-light'>
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} type={socialType} network={link.network} url={link.url} />
            ))}
          </div>
        </div>

        <div className='text-center'>
          <p className='text-base text-gray'>{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
