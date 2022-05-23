import React from 'react'
import './HomeContainer.css'
import Navbar from '../Navbar/Navbar'
import Gridbar from '../Gridbar/Gridbar'

const HomeContainer = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <span style={{color:'#FFFFFF', marginTop:'5px', fontWeight:'400'}}>Dashboard</span>
      <Gridbar />
    </div>
  )
}

export default HomeContainer
