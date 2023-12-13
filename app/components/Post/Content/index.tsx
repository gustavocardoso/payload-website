import Image from '~/components/Common/Image'
import RenderPage from '~/components/RenderPage'
import type { Layout } from '~/types/page'

type PostContentProps = {
  layout: Layout[]
  image?: string
  imageAlt?: string
  className?: string
}

const PostContent: React.FC<PostContentProps> = ({ image, imageAlt = '', layout, className }) => {
  return (
    <main className={`post-content ${className}`}>
      {image && (
        <div className='featured-image w-full h-[468px] -mb-8'>
          <Image src={image!} alt={imageAlt} className='w-full h-full object-cover object-center' />
        </div>
      )}

      <RenderPage layout={layout} />
    </main>
  )
}
export default PostContent
