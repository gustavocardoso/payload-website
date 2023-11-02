import type { LinkDescriptor } from '@remix-run/node'
import { useMatches } from '@remix-run/react'
import React from 'react'

export function DynamicLinks() {
  let links: LinkDescriptor[] = useMatches().flatMap(match => {
    // @ts-ignore
    let fn = match.handle?.dynamicLinks
    if (typeof fn !== 'function') return []
    return fn({ data: match.data })
  })

  return (
    <React.Fragment>
      {links.map(link => (
        <link {...link} key={link.integrity || JSON.stringify(link)} />
      ))}
    </React.Fragment>
  )
}
