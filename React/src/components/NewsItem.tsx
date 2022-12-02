import React from "react";
import { Button,Card,CardActions ,CardContent,Typography,Grid} from '@mui/material';


type NewsItemProps = {
    id: number
    title: string
    url: string
    index: number
    time:number
}


export function NewsItem({id,title,url,time,index}:NewsItemProps){
  const date = new Date(time*1000)
    return(
        <Grid container spacing={2} alignItems='center' justifyContent='center' paddingBottom={3}>
        <Grid item xs={8}> 
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography >{title}</Typography>
            <Typography sx={{mb:1.5}} color="text.secondary" >{date.getMonth()+1}/{date.getDate()} {date.getHours()}:{date.getMinutes()}</Typography>
        </CardContent>
        <CardActions >
        <Button size="small" href={url}>Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
    )
}
