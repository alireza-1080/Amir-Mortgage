import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import HomePageServices from './components/HomePageServices/HomePageServices'
import HomePageTools from './components/HomePageTools/HomePageTools'

function App() {

  return (
    <div className='app'>
      <Header />
      <HomePageServices />
      <HomePageTools />
    </div>
  )
}

export default App