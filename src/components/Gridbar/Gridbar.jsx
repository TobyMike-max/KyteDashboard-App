import React from 'react'
import './Gridbar.css'

const Gridbar = () => {
  return (
    <div className="grid">
      <div className="balance">
        <div>
          <span className="text">Balance</span>
          <span className="text">Transaction</span>
        </div>
        <div>
          <span className="text">Income</span>
          <span className="text">Expenses</span>
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
