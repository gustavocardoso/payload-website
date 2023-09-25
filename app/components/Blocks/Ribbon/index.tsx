import Button from '~/components/Button'
import type { RibbonProps } from '~/types/blocks/ribbon'
import type { ButtonColors } from '~/types/buttons'

const Ribbon: React.FC<RibbonProps> = ({
  props: {
    title,
    text,
    link = undefined,
    linkStyle = 'text',
    linkText = undefined,
    buttonStyle = undefined,
    background = 'light'
  }
}) => {
  return (
    <section className={`hero relative z-0 background-${background} py-8 group relative z-10`}>
      <div className='container px-4 flex justify-center items-center gap-x-12'>
        {title && (
          <p className='text-2xl'>
            <strong>{title}</strong>
          </p>
        )}

        {text && <p className='text-xl'>{text}</p>}

        {link && linkStyle === 'button' && (
          <Button href={link} color={buttonStyle as ButtonColors}>
            <div className='flex justify-center items-center gap-x-2'>
              <svg
                aria-hidden='true'
                fill='none'
                stroke='currentColor'
                stroke-width='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='w-8'
              >
                <path
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              {linkText}
            </div>
          </Button>
        )}
      </div>
    </section>
  )
}

export default Ribbon
