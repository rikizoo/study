import React, { useEffect, useState } from 'react'
import { PostType } from '../interface'
import { fetchApi, PostIds } from '../api/api'
import { NewsItem } from './NewsItem'
import { BasicPagination } from './BasicPagination'
import { Box, Tab, CircularProgress, Grid } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

export const Body: React.FC = () => {
  const [articles, setArticles] = useState<PostType[]>([])
  // ロード中の場合はtrue、ロードが完了した場合はfalseを返す(初期値はtrue)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [value, setValue] = useState<string>('top')
  const [postLength, setPostLength] = useState<number>(0)
  const [page, setPage] = useState<number>(1)

  const handlePageChange = (event: React.ChangeEvent<unknown>, newValue: number): void => {
    setPage(newValue)
    window.scrollTo(0, 0)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue)
    setPage(1)
  }

  const loadStories = async () => {
    setIsLoading(true)
    const { ids, pageLength } = await PostIds(value)
    setPostLength(pageLength / 10)
    const { posts, isLoading } = await fetchApi(ids.slice(page * 10 - 10, page * 10))
    setIsLoading(isLoading)
    setArticles(posts)
  }

  // マウント時とレンタリング後にvalueが変化していた時のみ実行
  useEffect(() => {
    loadStories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, page])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="トップニュース" value="top" />
            <Tab label="新着" value="new" />
            <Tab label="ベスト" value="best" />
          </TabList>
        </Box>

        {isLoading ? (
          <Grid container justifyContent="center" paddingTop={3} paddingBottom={100}>
            <CircularProgress color="inherit"></CircularProgress>
          </Grid>
        ) : (
          <>
            <TabPanel value="top">
              <div className="pl-48 pt-24 bg-white border-b-8 border-gray-50">
                {articles.map((it, index) => (
                  <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} time={it.time} index={index} />
                ))}
              </div>
            </TabPanel>
            <TabPanel value="new">
              <div className="pl-48 pt-24 bg-white border-b-8 border-gray-50">
                {articles.map((it, index) => (
                  <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} time={it.time} index={index} />
                ))}
              </div>
            </TabPanel>
            <TabPanel value="best">
              <div className="pl-48 pt-24 bg-white border-b-8 border-gray-50">
                {articles.map((it, index) => (
                  <NewsItem key={it.id} id={it.id} title={it.title} url={it.url} time={it.time} index={index} />
                ))}
              </div>
            </TabPanel>
          </>
        )}
      </TabContext>
      <BasicPagination postLength={postLength} onChange={handlePageChange}></BasicPagination>
    </Box>
  )
}
