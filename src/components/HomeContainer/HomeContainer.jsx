import React from 'react'
import './HomeContainer.css'
import Navbar from '../Navbar/Navbar'
import Gridbar from '../Gridbar/Gridbar'

const HomeContainer = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div style={{color:'#FFFFFF', marginTop:'2px', fontWeight:'500',
                    fontSize: '1.2rem', marginBottom: '10px'}}>Dashboard</div>
      <Gridbar />
    </div>
  )
}

export default HomeContainer
