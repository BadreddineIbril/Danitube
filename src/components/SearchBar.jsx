import React, { useState } from 'react'
import {Search} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if(searchTerm){
        navigate(`search/${searchTerm}`)
        setSearchTerm('')
    }
  }

  return (
    <form className="serach-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={searchTerm} onChange={(e)=>{
            setSearchTerm(e.target.value)
        }} />
        <Search />
    </form>
  )
}
