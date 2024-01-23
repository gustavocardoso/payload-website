import userIcon from '@images/user-icon.svg'
import { useEffect, useState } from 'react'
import type { z } from 'zod'
import { getCmsLoggedUser, type cmsUserSchema } from '~/api/user'

type AdminBarProps = z.infer<typeof cmsUserSchema> & {
  collection: string
  id: string
  cmsURL: string
  apiURL: string
}

const AdminBar = ({ collection, id, cmsURL, apiURL }: AdminBarProps) => {
  const [loggedUser, setLoggedUser] = useState<z.infer<typeof cmsUserSchema> | null>(null)
  useEffect(() => {
    const fetchLoggedUser = async () => {
      const loggedUser = await getCmsLoggedUser(apiURL)
      if (loggedUser?.user !== null && loggedUser?.user !== undefined) {
        setLoggedUser(loggedUser)
      }
    }

    fetchLoggedUser()
  }, [apiURL])

  // console.log('rendering with loggedUser:', loggedUser) // Add this line

  if (!loggedUser) {
    return null
  }

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
            Howdy, {`${loggedUser?.user?.firstName} ${loggedUser?.user?.lastName}`}
          </p>
          <div className='w-8 h-8 ml-2 rounded-full overflow-hidden'>
            {typeof loggedUser?.user?.thumbnail === 'object' && loggedUser?.user?.thumbnail?.url ? (
              <img
                src={loggedUser?.user?.thumbnail?.url}
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
