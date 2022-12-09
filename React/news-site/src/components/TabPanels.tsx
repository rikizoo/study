import React from 'react'
import { NewsItem } from './NewsItem'
import { PostType } from '../interface'
import { Box, Tab, CircularProgress, Grid } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

type TabProps = {
  articles: PostType[]
  isLoading: boolean
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const TabPanels: React.FC<TabProps> = ({ articles, isLoading, value, setValue, setPage }) => {
  const handleTabChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue)
    setPage(1)
  }
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
          <Tab label="トップニュース" value="top" />
          <Tab label="新着" value="new" />
          <Tab label="ベスト" value="best" />
        </TabList>
      </Box>

      {isLoading ? (
        <Grid container justifyContent="center" paddingTop={3} paddingBottom={200}>
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
  )
}
