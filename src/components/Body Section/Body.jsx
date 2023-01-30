import React from 'react'
import './body.css'
import Listing from './Listing Section/Listing'
import Top from './Top Section/Top'

const Body = () => {
  return (
    <div className='main_content'>
      <Top />

      <div className='bottom flex'>
        <Listing/>
        
      </div>
    </div>
  )
}

export default Body