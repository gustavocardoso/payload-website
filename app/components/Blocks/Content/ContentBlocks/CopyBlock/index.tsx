import ContentSerialize from '~/components/ContentSerialize'

type CopyBlockProps = {
  copy: Array<any> // You can define a more specific type for copy items
}

const CopyBlock: React.FC<CopyBlockProps> = ({ copy }) => {
  return (
    <div className='copy-container'>
      <ContentSerialize content={copy} />
    </div>
  )
}

export default CopyBlock
