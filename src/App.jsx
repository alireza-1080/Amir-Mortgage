import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import HomePageServices from './components/HomePageServices/HomePageServices'
import HomePageTools from './components/HomePageTools/HomePageTools'
import BestRateSection from './components/BestRateSection/BestRateSection'
import PrivacySafetySection from './components/PrivacySafetySection/PrivacySafetySection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Header />
      <HomePageServices />
      <HomePageTools />
      <BestRateSection />
      <PrivacySafetySection />
      <Footer />
    </div>
  )
}

export default App