import React from 'react'
import './Gridbar.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LeakRemoveIcon from '@mui/icons-material/LeakRemove';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PieChartIcon from '@mui/icons-material/PieChart';


const Gridbar = () => {
  return (
    <div className="grid">
      <div className="balance">
        <div className="topBalance">
          <div className="top-left">
            <span className="text">Balance</span>
            <span className="big_dols">$6,545</span>
            <span className="tiny_text" style={{color:'green',
              paddingLeft:'5px'}}>
              <NorthEastIcon style={{fontSize:'10px'}}/> 9%
            </span>
          </div>
          <div className="top-right">
            <span className="text">Transaction</span>
            <span className="small_dols">$1,220</span>
          </div>
        </div>

        <div className="bottomBalance">
          <div className="bottom-left">
            <span className="text">Income</span>
            <span className="small_dols">$2,450</span>
            <span className="tiny_text" style={{color:'green',
              paddingLeft:'35px'}}>
              <NorthEastIcon style={{fontSize:'10px'}} /> 2%
            </span>
          </div>
          <div className="bottom-right">
            <span className="text">Expenses</span>
            <span className="small_dols">$1,230</span>
            <span className="tiny_text" style={{color:'red', paddingLeft:'35px'}}>
              <SouthEastIcon style={{fontSize:'10px'}} /> 4.5%
            </span>
          </div>
        </div>
      </div>

      <div className="myAccounts">
        <span className="text">My Accounts</span>
        <div className="bar_chart">
          <div>
            Icons
            Bitcoin
            $2,636
            0.068 BTC
          </div>
          <div>
            Icons
            Ethereum
            $2,509
            1.09 ETH
          </div>
          <div>
            Icons
            Ripple
            $582
            694.01 XRP
          </div>
          <div>
            Icons
            Dogecoin
            $818
            2624.73 DOGE
          </div>
        </div>
        <div className="pie_chart">
          <div>
            32%
            XRP
          </div>
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
            <CreditCardIcon />
            <span>Pay Bill</span>
          </div>
          <div className="mn-style">
            <LeakRemoveIcon />
            <span>Transfer</span>
          </div>
          <div className="mn-style">
            <LocalAtmIcon />
            <span>Receive</span>
          </div>
          <div className="mn-style">
            <PointOfSaleIcon />
            <span>Find ATM</span>
          </div>
          <div className="mn-style">
            <CardGiftcardIcon />
            <span>Voucher</span>
          </div>
          <div className="mn-style">
            <PieChartIcon />
            <span>Reports</span>
          </div>
        </div>
      </div>

      <div className="news">
        <span className="text">News</span>
        <div className="horizon">
          <p>
            Major cryptocurrencies continued
            the downward trend, trading with
            cuts on Thursday
          </p>
          <KeyboardArrowRightIcon style={{cursor:'pointer'}}/>
        </div>
        <div className="horizon">
          <p>
            DubaiCoin scammed the cryptocurrency
            market in such a way that no cryptocurrency
            exchange is...
          </p>
          <KeyboardArrowRightIcon style={{cursor:'pointer'}}/>
        </div>
        <div className="horizon">
          <p>
            Did a cryptocurrency just rally 40,000,000%
            to become 4t largest digital asset?
          </p>
          <KeyboardArrowRightIcon style={{cursor:'pointer'}}/>
        </div>
        <div className="horizon">
          <p>
            Cassll to be first NASCAR driver
          </p>
          <KeyboardArrowRightIcon style={{cursor:'pointer'}}/>
        </div>
      </div>

      <div className="recentActivity">
        <span className="text">Recent Activity</span>
        <div>
          <div>
            <span> Sent</span>
            <span>$23.30</span>
          </div>
          <div>
            <span>Today</span>
          </div>
        </div>
        <div>
          <div>
            <span> Sent</span>
            <span>$23.50</span>
          </div>
          <div>
            <span>Today</span>
          </div>
        </div>
        <div>
          <div>
            <span>Received</span>
            <span>$14.00</span>
          </div>
          <div>
            <span>14 Jan 21</span>
          </div>
        </div>
        <div>
          <div>
            <span>Received</span>
            <span>$12.25</span>
          </div>
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gridbar
