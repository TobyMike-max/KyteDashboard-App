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
        <div className="charts">
          <div className="bar_chart">
            <div className="bitcoin marg">
              <span>Icons</span>
              <p>Bitcoin</p>
              <p className="marg">$2,636</p>
              <span style={{fontSize:'10px', opacity:'0.8'}}>0.068 BTC</span>
            </div>
            <div className="ether marg">
              <span>Icons</span>
              <p>Ethereum</p>
              <p className="marg">$2,509</p>
              <span style={{fontSize:'10px', opacity:'0.8'}}>1.09 ETH</span>
            </div>
            <div className="ripple marg">
              <span>Icons</span>
              <p>Ripple</p>
              <p className="marg">$582</p>
              <span style={{fontSize:'10px', opacity:'0.8', borderBottom:'0px'}}>694.01 XRP</span>
            </div>
            <div className="doge marg">
              <span>Icons</span>
              <p>Dogecoin</p>
              <p className="marg">$818</p>
              <span style={{fontSize:'10px', opacity:'0.8'}}>2624.73 DOGE</span>
            </div>
          </div>
          <div className="pie_chart">
            <div className="circle">
              <span style={{fontSize:'20px', color:'white', opacity:'0.5'}}>32%</span>
              <span style={{fontSize:'11px'}}>XRP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="market">
        <span className="text">Market</span>
        <div className="market_container">
          <div className="market_flex">
            <span style={{fontSize:'8.5px', color:'#71D2B4'}}>BTC TO USD</span>
            <span>3885.00</span>
            <span className="tiny_text" style={{color:'red'}}>
              <SouthEastIcon style={{fontSize:'10px'}} />23%
            </span>
          </div>
          <div className="market_flex">
            <span style={{fontSize:'8.5px', color:'#888FEC'}}>ETH TO USD</span>
            <span>2415.75</span>
            <span className="tiny_text" style={{color:'green'}}>
              <NorthEastIcon style={{fontSize:'10px'}}/>2.9%
            </span>
          </div>
          <div className="market_flex">
            <span style={{fontSize:'8.5px'}}>XRP TO USD</span>
            <span>0.83</span>
            <span className="tiny_text" style={{color:'green'}}>
              <NorthEastIcon style={{fontSize:'10px'}}/>21%
            </span>
          </div>
          <div className="market_flex">
            <span style={{fontSize:'8.5px'}}>DOGE TO USD</span>
            <span>0.31</span>
            <span className="tiny_text" style={{color:'red'}}>
              <SouthEastIcon style={{fontSize:'10px'}} />5.5%
            </span>
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
        <div className="recent_container">
          <div className="activ">
            <div className="flex_column">
              <span>BTC</span>
              <span className="smalls">Sent</span>
              <span>$23.30</span>
            </div>
            <div className="flex_column smalls">
              <span>Today</span>
            </div>
          </div>
          <div className="activ">
            <div className="flex_column">
              <span>BTC</span>
              <span className="smalls">Received</span>
              <span>$23.50</span>
            </div>
            <div className="flex_column smalls">
              <span>Today</span>
            </div>
          </div>
          <div className="activ">
            <div className="flex_column">
              <span>XRP</span>
              <span className="smalls">Received</span>
              <span>$14.00</span>
            </div>
            <div className="flex_column smalls">
              <span>14 Jan 21</span>
            </div>
          </div>
          <div className="activ">
            <div className="flex_column">
              <span>XRP</span>
              <span className="smalls">Received</span>
              <span>$12.25</span>
            </div>
            <div className="flex_column smalls">
              <span>30 May 22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gridbar
