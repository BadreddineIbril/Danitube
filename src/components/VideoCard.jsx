import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material' 
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from './utils/constants'


export default function VideoCard({ video : {id : {videoId}, snippet } }) {

  return (
    <Card className='get-anim' sx={{ width : {md : '290px', xs : '100%'}, boxShadow : 'none', borderRadius : '1em', margin : ".5em", backgroundColor : 'transparent' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
            <div className="animation">
                <div>
                    <span class="material-symbols-outlined">
                        play_arrow
                    </span>
                    <p>Play</p>
                </div>
            </div>
          <CardMedia
              image={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              sx={{ width: '100%', height : 160, borderRadius : '1em' }}
          />
        </Link>  
        <CardContent sx={{backgroundColor : 'transparent', height : '80px', padding : '16px 0'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' color='#fff'>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) }
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' color='#fff' sx={{opacity : .5}}>
                    {snippet?.channelTitle .slice(0, 60) || demoChannelTitle.slice(0, 60) }
                    <CheckCircle sx={{ fontSize : 12, color: '#fff', ml : '5px' }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}
