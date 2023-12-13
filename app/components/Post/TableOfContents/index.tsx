import type { LinksFunction } from '@remix-run/node'
import { useEffect, useState } from 'react'
import type Heading from '~/components/Common/Heading'

type Heading = {
  id: string
  text: string
}

export const links: LinksFunction = () => [
  {
    rel: 'prefetch',
    as: 'script',
    href: 'https://cdn.jsdelivr.net/npm/smooth-scroll@17/dist/smooth-scroll.min.js'
  }
]

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()

    setTimeout(() => {
      const yOffset = -100
      const element = document.getElementById(id)
      console.log(element) // log the element
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset

        // Scroll to the desired position
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 0)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getHeadings = () => {
        const postContent = document.querySelector('.post-content')
        const headingElements = postContent?.querySelectorAll('h2')
        const newHeadings: Heading[] = []

        headingElements?.forEach((heading, index) => {
          const anchorId = `heading-${index}`
          heading.setAttribute('id', anchorId)
          newHeadings.push({ id: anchorId, text: heading.textContent || '' })
        })

        setHeadings(newHeadings)
      }

      getHeadings()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(heading => document.getElementById(heading.id))
      const tableOfContents = document.getElementById('toc')!

      headingElements.forEach(h2 => {
        let id = h2?.id
        let rect = h2?.getBoundingClientRect()
        let top = window.scrollY + (rect?.top || 0)
        let scroll = window.scrollY
        let windowHeight = window.innerHeight

        // set offsetPosition to 15% of the window height
        let offsetPosition = (15 / 100) * windowHeight

        if (scroll > top - offsetPosition) {
          Array.from(tableOfContents.getElementsByTagName('a')).forEach(a =>
            a.classList.remove('active')
          )
          tableOfContents.querySelector('a[href="#' + id + '"]')?.classList.add('active')
        } else if (scroll < top + offsetPosition) {
          tableOfContents.querySelector('a[href="#' + id + '"]')?.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  return (
    <div className='sticky flex-col flex gap-3 mt-8 table-of-contents top-40'>
      <h4>Table of Contents</h4>

      {headings && headings.length > 0 && (
        <div id='toc' className='table-of-contents-items flex flex-col gap-y-2'>
          {headings.map(heading => (
            <a
              href={`#${heading.id}`}
              key={heading.id}
              onClick={event => handleClick(event, heading.id)}
            >
              {heading.text}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
export default TableOfContents
