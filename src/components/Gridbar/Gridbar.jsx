import React from 'react'
import './Gridbar.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const Gridbar = () => {
  return (
    <div className="grid">
      <div className="balance">
        <div>
          <span className="text">Balance</span>
          <span className="big_dols">$6,545</span>
          <NorthEastIcon /> 9%
        </div>
        <div>
          <span className="text">Transaction</span>
          <span className="small_dols">$1,220</span>
        </div>
        <div>
          <span className="text">Income</span>
          <span className="small_dols">$2,450</span>
          <NorthEastIcon /> 2%
        </div>
        <div>
          <span className="text">Expenses</span>
          <span className="small_dols">$1,230</span>
          <SouthEastIcon /> 4.5%
        </div>
      </div>

      <div className="myAccounts">
        <span className="text">My Accounts</span>
        <div className="bar_chart">
        </div>
        <div className="pie_chart">
        </div>
      </div>

      <div className="market">
        <span className="text">Market</span>
      </div>

      <div className="quickActions">
        <span className="text">Quick Actions</span>
      </div>

      <div className="news">
        <span className="text">News</span>
      </div>

      <div className="recentActivity">
        <span className="text">Recent Activity</span>
      </div>
    </div>
  )
}

export default Gridbar
