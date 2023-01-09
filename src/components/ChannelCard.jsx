import {Link} from 'react-router-dom'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material' 
import { demoProfilePicture } from './utils/constants'


export default function ChannelCard({ channelDetail, marginTop }) {
    console.log(channelDetail?.id)
  return (
    <Box sx={{
        boxShadow : "none",
        borderRadius : '20px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : {xs : '365px', md : '320px'},
        height : '326px',
        margin : 'auto',
        marginTop : marginTop
    }}>
        <Link to={`/channel/${channelDetail?.id}`}>
            <CardContent sx={{ display : "flex", flexDirection : 'column', justifyContent : 'center', textAlign : 'center',color : '#fff'}}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius : '50%', height : '180px', width : '180px' }}
                ></CardMedia>
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize : '14px', color: 'gray', ml : '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                      <Typography >
                          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                      </Typography>
                    )}
            </CardContent>
        
        </Link>
    </Box>
  )
}
