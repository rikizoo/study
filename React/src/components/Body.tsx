import React, { useEffect, useState } from 'react'
import { PostType } from '../interface'
import { fetchApi, PostIds } from '../api/api'
import { TabPanels } from './TabPanels'
import { BasicPagination } from './BasicPagination'
import { Box } from '@mui/material'

export const Body: React.FC = () => {
  const [articles, setArticles] = useState<PostType[]>([])
  // ロード中の場合はtrue、ロードが完了した場合はfalseを返す(初期値はtrue)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [value, setValue] = useState<string>('top')
  const [postLength, setPostLength] = useState<number>(0)
  const [page, setPage] = useState<number>(1)

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
      <TabPanels
        articles={articles}
        isLoading={isLoading}
        value={value}
        setValue={setValue}
        setPage={setPage}
      ></TabPanels>
      <BasicPagination postLength={postLength} page={page} setPage={setPage}></BasicPagination>
    </Box>
  )
}
