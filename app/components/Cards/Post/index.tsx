import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { useOutletContext } from '@remix-run/react'
import type { Post } from '~/types/posts'
import type { siteOptionsProps } from '~/types/site-options'

type PostCardProps = {
  post: Post
}

const blogImage =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neSUyMGJ1c2luZXNzfGVufDB8fDB8fHww'

const PostCard: React.FC<PostCardProps> = ({ post: { title } }) => {
  const siteOptions = useOutletContext<siteOptionsProps>()
  console.log(title)

  return (
    <div className='post-card col-span-4 bg-light rounded-lg overflow-hidden group hover:bg-dark transition-all duration-500'>
      <div className='post-image aspect-video overflow-hidden'>
        <a href='/blog-slug'>
          <img
            src={blogImage}
            alt=''
            className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
          />
        </a>
      </div>

      <div className='post-info p-8'>
        <span className='post-category font-medium text-primary'>Business</span>
        <h2 className='text-2xl font-semibold group-hover:text-white transition-all duration-500'>
          <a href='/blog-slug'>{title}</a>
        </h2>

        <a
          href='/blog/slug'
          className='inline-flex gap-x-2 items-center text-tertiary hover:text-tertiary-hover group-hover:text-highlight group-hover:hover:text-highlight-hover transition-all duration-500'
        >
          Read Post
          {siteOptions.fontAwesome && <i className='fa-solid fa-arrow-right-long'></i>}
          {!siteOptions.fontAwesome && <ArrowLongRightIcon className='w-6' />}
        </a>
      </div>
    </div>
  )
}
export default PostCard
