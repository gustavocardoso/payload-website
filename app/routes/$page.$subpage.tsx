import { useParams } from '@remix-run/react'
import RenderPage from '~/components/RenderPage'

const SubPage = () => {
  const params = useParams()
  return (
    <div className='container px-4 py-16'>
      <h1>Page: {params.page}</h1>

      <h2>Subpage: {params.subpage}</h2>
      <RenderPage layout={[]} />
    </div>
  )
}

export default SubPage
