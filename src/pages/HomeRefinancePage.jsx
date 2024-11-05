import "./HomeRefinancePage.css"
import React from 'react'
import Header from '../components/Header/Header'
import FooterPicture from '../components/FooterPicture/FooterPicture'
import ProgressSection from '../components/MutualComponents/ProgressSection/ProgressSection'
import HomeRefinance1 from '../components/HomeRefinanceSections/HomeRefinance1/HomeRefinance1'

function HomeRefinancePage() {
  return (
    <div className='home-refinance-page'>
      <Header />
      <ProgressSection />
      <HomeRefinance1 />
      <FooterPicture />
    </div>
  )
}

export default HomeRefinancePage