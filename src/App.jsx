import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import HomePageServices from './components/HomePageServices/HomePageServices'
import HomePageTools from './components/HomePageTools/HomePageTools'
import BestRateSection from './components/BestRateSection/BestRateSection'

function App() {

  return (
    <div className='app'>
      <Header />
      <HomePageServices />
      <HomePageTools />
      <BestRateSection />
    </div>
  )
}

export default App