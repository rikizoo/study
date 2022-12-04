import {Pagination,Stack} from '@mui/material';

type PaginationProps = {
  postLength:number
  onChange:(event: React.ChangeEvent<unknown>, page: number) => void
}

export function BasicPagination({postLength,onChange}:PaginationProps) {
  return (
    <Stack spacing={2} alignItems="center" paddingBottom={3}>
    <Pagination count={postLength} color="primary" onChange={onChange}/>
   </Stack>
  );
}