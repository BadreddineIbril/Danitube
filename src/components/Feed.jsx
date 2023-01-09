import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromApi } from './utils/fechFromApi'

export default function Feed() {

  const [selectCategorie, setSelectCategorie] = useState("New")
  const [videos, setVideos] = useState([])


  useEffect(()=>{
    console.log(`search?part=snippet&q=${selectCategorie}`)
      fetchFromApi(`search?part=snippet&q=${selectCategorie}`)
      .then((data)=> setVideos(data.items) )
  },[selectCategorie]);  

  return (
    <div className='feed'>
        <SideBar 
            selectCategorie={selectCategorie}
            setSelectCategorie ={setSelectCategorie}
        />
        <div className="content">
            <h3>{selectCategorie} <span> Videos</span></h3>
            <Videos videos={videos} />
        </div>
    </div>
  )
}
