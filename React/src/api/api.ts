import React from "react"
import {Story} from "../interface"
interface FetchStory{
    stories:Story[]
    isLoading:boolean
}
export const HN_HOST = "https://hacker-news.firebaseio.com/v0"


export const fetchTopStoriesIds = async (currentTab:string): Promise<number[]> => {
    const response = await fetch(`${HN_HOST}/${currentTab}stories.json`)
    const topStoriesIds = await response.json()
    return topStoriesIds
}

export const fetchStory = async (id:number): Promise<Story> => {
    const response = await fetch(`${HN_HOST}/item/${id}.json`)
    const storyData = await response.json()

    const story:Story = {
        id: storyData.id,
        by: storyData.by,
        title: storyData.title,
        url: storyData.url,
      }
      return story

}

export const fetchStories = async (ids: number[]): Promise<FetchStory> => {
    const stories = await Promise.all(ids.map(fetchStory))
    const isLoading = false
    return {stories,isLoading}
}
