import React from 'react'
import {logo} from './utils/constants'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar'>
        <Link to="/">
            <img src={require('./utils/logo.png')} alt={logo} />
            <p>Danitube</p>
        </Link>
        <SearchBar />
    </div>
  )
}
