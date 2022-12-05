import React from "react";
import { Button,Card,CardActions ,CardContent,Typography,Grid} from '@mui/material';
import {NewsItemProps} from "../interface"


export const NewsItem : React.FC <NewsItemProps> = ({id,title,url,time,index}) => {
  const date = new Date(time*1000)
    return(
        <Grid container spacing={2} alignItems='center' justifyContent='center' paddingBottom={3}>
        <Grid item xs={8}> 
        <Card >
            <CardContent>
            <Typography >{title}</Typography>
            <Typography color="text.secondary" >{date.toLocaleDateString('ja-JP')} {date.toLocaleTimeString('ja-JP')}</Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'right',pr:1.5}}>
        <Button variant="outlined" size="small" href={url} target='_blank' rel="noopener noreferrer">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
    )
}
