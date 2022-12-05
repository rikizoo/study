import { Pagination, Stack } from '@mui/material'

type PaginationProps = {
  postLength: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

export const BasicPagination: React.FC<PaginationProps> = ({ postLength, onChange }) => {
  return (
    <Stack spacing={2} alignItems="center" paddingBottom={3}>
      <Pagination count={postLength} color="primary" onChange={onChange} />
    </Stack>
  )
}
