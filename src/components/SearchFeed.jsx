import Videos  from './Videos'
import { fetchFromApi } from './utils/fechFromApi'
import {Box, Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function SearchFeed() {
  
  const [videos, setvideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(()=>{
 
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data?.items))

  },[searchTerm])

  return (
    <Box p={2} sx={{ overflow:"auto", height : '90vh', flex: 2, position : 'relative', top : '80px', margin : '0  5%' }}>
        <Typography variant='h6' fontWeight='bold' mb={2} sx={{ color: 'white'} }>
            Search Resaults for : <span style={{color: '#ff3467'}}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos} />
    </Box>
  )
}
