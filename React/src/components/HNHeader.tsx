import React from "react"
import {AppBar, Box,Toolbar,Typography, Button,IconButton} from '@mui/material';

export function HNHeader() {
  return (
     <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
       <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           NewsSite
         </Typography>
       </Toolbar>
     </AppBar>
   </Box>
  )
}