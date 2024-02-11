import { useEffect, useState } from 'react'
import { Media, MediaSizes } from '~/types/media'

export function useMediaSizes<T extends string>(mediaObject: Media) {
  const [sizes, setSizes] = useState<{
    media: MediaSizes<T> | string | null
    mediaType: string | null
  }>({ media: null, mediaType: null })

  useEffect(() => {
    let media: MediaSizes<T> | string | null = null
    let mediaType: string | null = null

    if (mediaObject?.url?.endsWith('.svg')) {
      media = mediaObject.url
      mediaType = 'svg'
      setSizes({ media, mediaType })
      return
    }

    if (mediaObject?.webp?.url) {
      media = mediaObject.webp.sizes
      mediaType = 'webp'
    }

    if (!mediaObject?.webp?.url) {
      media = mediaObject?.sizes
      mediaType = mediaObject?.url.slice(-3)
    }

    setSizes({ media, mediaType })
  }, [mediaObject])

  return sizes
}
