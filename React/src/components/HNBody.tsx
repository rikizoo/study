import React, { useEffect, useState } from "react"
import { Story } from "../interface"
import { fetchStories, fetchTopStoriesIds} from "../api/api"
import { NewsItem } from "./NewsItem"
import {Box,Tab,CircularProgress,Grid} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';


export function HNBody(){
    const [stories,setStories] = useState<Story[]>([])
    const [topStoriesIds, setTopStoriesIds] = useState<number[]>([])
    // ロード中の場合はtrue、ロードが完了した場合はfalseを返す(初期値はtrue)
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [value, setValue] = useState<string>('top');


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    const loadStories = async () =>{
        setIsLoading(true)
        const topStoriesIdsData = await fetchTopStoriesIds(value)
        setTopStoriesIds(topStoriesIdsData)
        const {stories,isLoading} = await fetchStories(topStoriesIdsData.slice(0,10))
        setIsLoading(isLoading)
        setStories(stories)
    }
    

    // マウント時とレンタリング後にvalueが変化していた時のみ実行
    useEffect(()=>{
        loadStories()
    },[value])

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="トップニュース" value="top" />
              <Tab label="新着" value="new" />
              <Tab label="ベスト" value="best" />
            </TabList>
          </Box>

          {isLoading 
          ? 
          <Grid container justifyContent='center' paddingTop={3}>
          <CircularProgress color="inherit" ></CircularProgress>
          </Grid>
          :
          <>
          <TabPanel value="top">
          <div className="pl-48 pt-24 bg-white border-b-8 border-gray-50">
            {stories.map((it, index) => (
                <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} index={index}/>
            ))}
          </div>
          </TabPanel>
          <TabPanel value="new">
          <div className="pl-48 pt-24 bg-white border-b-8 border-gray-50">
            {stories.map((it, index) => (
                <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} index={index}/>
            ))}
          </div>
          </TabPanel>
          <TabPanel value="best">
          <div className="pl-48 pt-24 bg-white border-b-8 border-gray-50">
            {stories.map((it, index) => (
                <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} index={index}/>
            ))}
          </div>
          </TabPanel>
          </>
          }
        </TabContext>
      </Box>
    )
}