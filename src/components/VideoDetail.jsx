import {Link, useParams} from 'react-router-dom'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material' 
import ReactPlayer from 'react-player'
import Videos from './Videos'
import { fetchFromApi } from './utils/fechFromApi'
import { useEffect, useState } from 'react'


export default function VideoDetail() {

  const { id } = useParams();
  const [videoDetails,setVideoDetails] = useState(null)
  const [videos,setVideos] = useState(null)

  useEffect(()=>{
      fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]))

      fetchFromApi(`search?part=snippet&relatedToVideoId=${id}`)
      .then((data) => setVideos(data.items))
  },[id])

  if(!videoDetails?.snippet){ return 'Loading...'}
  const { snippet : { title, channelId, channelTitle} , statistics : { viewCount, likeCount } } = videoDetails
  console.log(videoDetails)

  return (
    <Box minHeight='95vh' sx={{position : 'relative', top : '80px', margin : '0 8%'}}>
        <Stack  direction={{ xs : 'column', md : 'row' }}>
            <Box flex={1} sx={{padding : '0 2em'}}>
                <Box sx={{ width : '100%', position : 'sticky'}}> {/*0*/}
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${id}`}
                        className='react-player'
                        controls
                        playing={true}
                        style={{borderRadius: '1em'}} />
                    <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                        {title}
                    </Typography>
                    <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
                        <Link to={`/channel/${channelId}`}>
                            <Typography variant={{ sm : 'subtitle1', md : 'h6'}} color='#fff'>
                                {channelTitle}
                                <CheckCircle sx={{ fontSize : "12px", color : 'gray', ml : '5px'}} />
                            </Typography>
                        </Link>
                        <Stack direction='row' gap='20px' alignItems='center'>
                            <Typography variant='body1' sx={{opacity : .5}}>
                                {parseInt(viewCount).toLocaleString()} views
                            </Typography>
                            <Typography variant='body1' sx={{opacity : .5}}>
                                {parseInt(likeCount).toLocaleString()} likes
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Box px={2} py={{md : 1, xs : 5}} justifyContent='center' alignItems='center'>
                <Videos direction='column'  videos={videos} />
            </Box>
        </Stack>
        
        
    </Box>
  )
}




