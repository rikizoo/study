import { Pagination, Stack } from '@mui/material'
import React from 'react'

type PaginationProps = {
  postLength: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const BasicPagination: React.FC<PaginationProps> = ({ postLength, page, setPage }) => {
  const handlePageChange = (event: React.ChangeEvent<unknown>, newValue: number): void => {
    setPage(newValue)
    window.scrollTo(0, 0)
  }
  return (
    <Stack spacing={2} alignItems="center" paddingBottom={3}>
      <Pagination count={postLength} page={page} color="primary" onChange={handlePageChange} />
    </Stack>
  )
}
