import userIcon from '@images/user-icon.svg'
import type { z } from 'zod'
import type { userSchema } from '~/api/user'

type AdminBarProps = {
  user?: z.infer<typeof userSchema>
}

const AdminBar = ({ user }: AdminBarProps) => {
  return (
    <div className='bg-dark-hover'>
      <div className='px-4 flex items-center justify-between'>
        <div>
          <a
            href='http://localhost:3000/admin/collections/pages/652ef7953a4beb120ddede6a'
            target='_blank'
            rel='noreferrer'
          >
            Edit this page
          </a>
        </div>

        <div className='flex items-center hover:bg-primary group py-3 px-4 cursor-pointer'>
          <p className='text-sm m-0 text-light group-hover:text-white'>
            Howdy, {`${user?.firstName} ${user?.lastName}`}
          </p>
          <div className='w-8 h-8 ml-2 rounded-full overflow-hidden'>
            {typeof user?.thumbnail === 'object' && user?.thumbnail?.url ? (
              <img
                src={user?.thumbnail?.url}
                alt='avatar'
                className='w-full h-full object-cover object-center'
              />
            ) : (
              <img src={userIcon} alt='User Default Icon' className='w-full h-full' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminBar
