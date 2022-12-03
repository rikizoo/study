import {PostType} from "../interface"
interface FetchIds{
    ids:number[]
    pageLength:number
}
interface FetchStory{
    posts:PostType[]
    isLoading:boolean
}
export const FETCH_API_URL = "https://hacker-news.firebaseio.com/v0"


export const PostIds = async (currentTab:string): Promise<FetchIds> => {
    const response = await fetch(`${FETCH_API_URL}/${currentTab}stories.json`)
    const ids = await response.json()
    const pageLength = Object.keys(ids).length;
    return {ids,pageLength}
}

export const PostData = async (id:number): Promise<PostType> => {
    const response = await fetch(`${FETCH_API_URL}/item/${id}.json`)
    const postData = await response.json()

    const post:PostType = {
        id: postData.id,
        by: postData.by,
        title: postData.title,
        url: postData.url,
        time:postData.time
      }
      return post

}

export const fetchApi = async (ids: number[]): Promise<FetchStory> => {
    const posts = await Promise.all(ids.map(PostData))
    const isLoading = false
    return {posts,isLoading}
}
