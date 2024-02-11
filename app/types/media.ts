export type MediaSizes<T extends string> = {
  [K in T]: {
    url: string
    width: number | string
    height: number | string
  }
}

export type Media = {
  id: string
  title: string
  alt: string
  url: string
  sizes: MediaSizes<string> // Provide a type argument to MediaSizes
  webp?: {
    url: string
    sizes: MediaSizes<string> // Provide a type argument to MediaSizes
  }
}
