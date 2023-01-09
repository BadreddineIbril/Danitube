import React from 'react'
import {Stack, Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

export default function Videos({videos, direction}) {

  if(!videos?.length){ return 'Loading...'}

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' grap={2} style={{justifyContent : 'center'}}>
        {videos.map((item, inx)=>(
          <Box key={inx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  )
}
