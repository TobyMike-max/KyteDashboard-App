import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="searchWrapper">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon style={{color:'#FFFFFF', opacity: '0.5'}}/>
        </div>
        <div className="notificWrapper">
          <NotificationsIcon className="notif_icon" />
          <PersonIcon className="notif_icon" />
          <span style={{color:'#FFFFFF', marginRight: '20px', opacity: '0.8'}}>Rex Eze</span>
          <KeyboardArrowDownIcon style={{color:'#FFFFFF', opacity: '0.5'}}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
