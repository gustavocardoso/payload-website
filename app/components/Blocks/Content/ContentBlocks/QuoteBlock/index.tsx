type QuoteBlockProps = {
  testimonial: {
    title: string
    text: string
    author: string
    authorTitle: string
    company: string
  }
  blockType: string
  id: string
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({
  testimonial: { author, authorTitle, company, text, title }
}) => {
  return (
    <div className='quote-block grid grid-cols-12'>
      <div className='col-span-8 col-start-3 text-center text-xl font-semibold border-t-2 border-b-2 py-8'>
        <p className='leading-8 text-xl mb-8'>"{text}"</p>
        <p className='italic'>
          {author} {company && <span>, {authorTitle}</span>}
        </p>
        <p className='testimonial-company text-primary italic -mt-6 mb-0 font-medium'>{company}</p>
      </div>
    </div>
  )
}
export default QuoteBlock
