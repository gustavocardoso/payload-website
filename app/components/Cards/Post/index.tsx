import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Link, useOutletContext } from '@remix-run/react'
import type { Post } from '~/types/posts'
import type { siteOptionsProps } from '~/types/site-options'

type PostCardProps = {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post: { title, category, postImage, slug } }) => {
  const siteOptions = useOutletContext<siteOptionsProps>()
  const categories = category.map(cat => cat.title)
  let image

  if (postImage?.webp?.url) {
    image = postImage.webp.sizes?.card?.url
  } else if (!postImage?.webp?.url && postImage?.url) {
    image = postImage.sizes?.card?.url
  }

  return (
    <div className='post-card col-span-4 bg-light rounded-lg overflow-hidden group hover:bg-dark transition-all duration-500'>
      <div className='post-image aspect-video overflow-hidden'>
        <Link to={`/blog/${slug}`} prefetch='intent' unstable_viewTransition>
          <img
            src={image}
            alt=''
            className='w-full h-full grayscale group-hover:grayscale-0 object-cover object-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-[1500ms] ease-in-out'
          />
        </Link>
      </div>

      <div className='post-info p-8'>
        <span className='post-categories font-medium text-primary'>{categories.join(', ')}</span>

        <h2 className='text-2xl font-semibold group-hover:text-white transition-all duration-500'>
          <Link to={`/blog/${slug}`} prefetch='intent' unstable_viewTransition>
            {title}
          </Link>
        </h2>

        <Link
          to={`/blog/${slug}`}
          prefetch='intent'
          unstable_viewTransition
          className='inline-flex gap-x-2 items-center text-tertiary hover:text-tertiary-hover group-hover:text-highlight group-hover:hover:text-highlight-hover transition-all duration-500'
        >
          Read Post
          {siteOptions.fontAwesome && <i className='fa-solid fa-arrow-right-long'></i>}
          {!siteOptions.fontAwesome && <ArrowLongRightIcon className='w-6' />}
        </Link>
      </div>
    </div>
  )
}
export default PostCard
