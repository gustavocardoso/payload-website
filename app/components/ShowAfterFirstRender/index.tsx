import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const ShowAfterFirstRender: React.FC<Props> = ({ children, className }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div className={className} style={{ opacity: show ? 1 : 0, transition: '0.2s' }}>
      {children}
    </div>
  )
}
