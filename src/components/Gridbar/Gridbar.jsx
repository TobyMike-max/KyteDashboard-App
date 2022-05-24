import React from 'react'
import './Gridbar.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const Gridbar = () => {
  return (
    <div className="grid">
      <div className="balance">
        <div className="top-left">
          <span className="text">Balance</span>
          <span className="big_dols">$6,545</span>
          <NorthEastIcon /> 9%
        </div>
        <div className="top-right">
          <span className="text">Transaction</span>
          <span className="small_dols">$1,220</span>
        </div>
        <div className="bottom-left">
          <span className="text">Income</span>
          <span className="small_dols">$2,450</span>
          <NorthEastIcon /> 2%
        </div>
        <div className="bottom-right">
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
        <div>
          <div>
            <span>BTC TO USD</span>
            <span>3885.00</span>
          </div>
          <div>
            <span>ETH TO USD</span>
            <span>2415.75</span>
          </div>
          <div>
            <span>XRP TO USD</span>
            <span>0.83</span>
          </div>
          <div>
            <span>DOGE TO USD</span>
            <span>0.31</span>
          </div>
        </div>
      </div>

      <div className="quickActions">
        <span className="text">Quick Actions</span>
        <div className="mini-grid">
          <div className="mn-style">
            Icon
            <span>Pay Bill</span>
          </div>
          <div className="mn-style">
            Icon
            <span>Transfer</span>
          </div>
          <div className="mn-style">
            Icon
            <span>Receive</span>
          </div>
          <div className="mn-style">
            Icon
            <span>Find ATM</span>
          </div>
          <div className="mn-style">
            Icon
            <span>Voucher</span>
          </div>
          <div className="mn-style">
            Icon
            <span>Reports</span>
          </div>
        </div>
      </div>

      <div className="news">
        <span className="text">News</span>
      </div>

      <div className="recentActivity">
        <span className="text">Recent Activity</span>
        <div>
          <div>
            <span> Sent</span>
            <span>$23.30</span>
          </div>
          <div>
            <span>Today<span>
          </div>
        </div>
        <div>
          <div>
            <span> Sent</span>
            <span>$23.50</span>
          </div>
          <div>
            <span>Today<span>
          </div>
        </div>
        <div>
          <div>
            <span>Received</span>
            <span>$14.00</span>
          </div>
          <div>
            <span>14 Jan 21<span>
          </div>
        </div>
        <div>
          <div>
            <span>Received</span>
            <span>$12.25</span>
          </div>
          <div>
            <span><span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gridbar
