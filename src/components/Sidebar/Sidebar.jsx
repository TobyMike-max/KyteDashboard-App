import React from 'react'
import './sidebar.css';
import logo from '../component.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="Logo" />
        <span className="logo">Kyte.io</span>
      </div>

      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <StoreIcon className="icon"/>
            <span>Market</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Exchange</span>
          </li>
          <li>
            <PersonOutlineIcon className="icon"/>
            <span>My Accounts</span>
          </li>
          <li>
            <InsertChartIcon className="icon"/>
            <span>Reports</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Help</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
      <li>
        <SettingsApplicationsIcon className="icon"/>
        <span>Settings</span>
      </li>
      <li>
        <ExitToAppIcon className="icon"/>
        <span>Logout</span>
      </li>
      </div>
    </div>
  )
}

export default Sidebar
