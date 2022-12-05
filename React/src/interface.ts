export interface PostType {
  id: number
  by: string
  title: string
  url: string
  time: number
}

export interface FetchIds {
  ids: number[]
  pageLength: number
}

export interface NewsItemProps {
  id: number
  title: string
  url: string
  index: number
  time: number
}
