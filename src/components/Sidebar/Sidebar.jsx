import React from 'react'
import './sidebar.css';
import logo from '../component.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BarChartIcon from '@mui/icons-material/BarChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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
            <CurrencyExchangeIcon className="icon"/>
            <span>Exchange</span>
          </li>
          <li>
            <AccountBalanceWalletIcon className="icon"/>
            <span>My Accounts</span>
          </li>
          <li>
            <BarChartIcon className="icon"/>
            <span>Reports</span>
          </li>
          <li>
            <HelpOutlineIcon className="icon"/>
            <span>Help</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
      <li>
        <SettingsIcon className="icon"/>
        <span>Settings</span>
      </li>
      <li>
        <LogoutIcon className="icon"/>
        <span>Logout</span>
      </li>
      </div>
    </div>
  )
}

export default Sidebar
