import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutPageTabsSection from '../components/AboutPageTabsSection/AboutPageTabsSection'
import { useSelector } from 'react-redux'
import OurMission from '../components/AboutPageTabsSection/components/OurMission/OurMission'
import AmirAberoumand from '../components/AboutPageTabsSection/components/AmirAberoumand/AmirAberoumand'
import ContactUs from '../components/AboutPageTabsSection/components/ContactUs/ContactUs'
import BestRateSection from '../components/BestRateSection/BestRateSection'
import PrivacySafetySection from '../components/PrivacySafetySection/PrivacySafetySection'

function AboutPage() {

    const selectedTab = useSelector(state => state.aboutPageTabsStates.selectedTab)

    return (
        <>
            <Header />
            <AboutPageTabsSection />
            {selectedTab === "OUR MISSION" && <OurMission />}
            {selectedTab === "AMIR ABEROUMAND" && <AmirAberoumand />}
            {selectedTab === "CONTACT US" && <ContactUs />}
            <BestRateSection />
            <PrivacySafetySection />
            <Footer />
        </>
    )
}

export default AboutPage