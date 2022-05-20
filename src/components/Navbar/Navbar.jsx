import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="searchWrapper">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="notificWrapper">
          Icons
        </div>
      </div>
    </div>
  )
}

export default Navbar
