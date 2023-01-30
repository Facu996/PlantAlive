import React from 'react'
import './app.css'
import Body from './components/Body Section/Body'
import Sidebar from './components/Sidebar Section/Sidebar'


const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Body/>
    </div>
  )
}

export default App