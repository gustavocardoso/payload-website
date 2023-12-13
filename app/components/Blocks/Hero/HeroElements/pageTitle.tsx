import { Link } from '@remix-run/react'

type PageTitleProps = {
  page: string
  pageUrl?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ page, pageUrl }) => {
  return (
    <p className='hero-page-title'>
      {pageUrl !== '' ? (
        <Link
          className='!no-underline font-medium hover:!underline !text-2xl'
          to={pageUrl!}
          prefetch='intent'
          unstable_viewTransition
        >
          {page}
        </Link>
      ) : (
        <span>{page}</span>
      )}
    </p>
  )
}

export default PageTitle
