import React, { useState } from 'react';
import {Pagination,Typography,Stack} from '@mui/material';

type PaginationProps = {
  totalPage:number
}

export function BasicPagination({totalPage}:PaginationProps) {
  const [page, setPage] = useState<number>(1)
  const handleChange = (event: React.ChangeEvent<unknown>, newvalue:number) => {
    setPage(newvalue)
  }
  return (
    <Stack spacing={2} alignItems="center">
      <Typography>Page:{page}</Typography>
      <Pagination count={totalPage} color="primary" onChange={handleChange}/>
    </Stack>
  );
}