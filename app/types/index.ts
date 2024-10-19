declare global {
  interface TocLink {
    id: string
    depth: number
    text: string
    children?: TocLink[]
  }
  interface ArticleToc {
    title: string
    searchDepth: number
    depth: number
    links: TocLink[]
  }
  interface Locale {
    code: string
    file: string
    language: string
    name: string
  }
}
