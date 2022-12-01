import React from "react";
import { Button,Card,CardActions ,CardContent,Typography,Box,Grid} from '@mui/material';


type NewsItemProps = {
    id: number
    title: string
    url: string
    index: number
}


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);


export function NewsItem({id,title,url,index}:NewsItemProps){
    return(
        <Grid container spacing={2} alignItems='center' justifyContent='center' paddingBottom={3}>
        <Grid item xs={8}> 
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
        <div>
            <a >{title}</a>
        </div>
        </CardContent>
        <CardActions >
        <Button size="small" href={url}>Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
    )
}
