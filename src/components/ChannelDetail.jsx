import ChannelCard  from './ChannelCard'
import Videos  from './Videos'
import { fetchFromApi } from './utils/fechFromApi'
import {Box} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import zIndex from '@mui/material/styles/zIndex'


export default function ChannelDetail() {
  
  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setvideos] = useState([])
  const { id } = useParams()

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setvideos(data?.items))

  },[id])

  return (
    <Box minHeight="95vh">
        <Box>
            <div style={{
              zIndex : 10,
              height : '300px',
              background: 'linear-gradient(157deg, #111330 0%, #111330 45%, #22244a 100%)',
              borderRadius: '0 2em 2em 0'
            }} />
            <ChannelCard channelDetail={ChannelDetail} marginTop={'-110px'} />
        </Box>
        <Box display='flex' p='2' style={{margin : '0 5%', justifyContent : 'center'}}>
            <Box>
                <Videos videos={videos} />
            </Box>
        </Box>
    </Box>
  )
}
