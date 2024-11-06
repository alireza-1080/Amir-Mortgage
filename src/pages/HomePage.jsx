import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import HomePageServices from '../components/HomePageServices/HomePageServices'
import HomePageTools from '../components/HomePageTools/HomePageTools'
import BestRateSection from '../components/BestRateSection/BestRateSection'
import PrivacySafetySection from '../components/PrivacySafetySection/PrivacySafetySection'
import Footer from '../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { reset_userApplicationData } from '../redux/userApplicationDataSlicer'
import { updateRoute } from '../redux/routingSlicer'
import { resetProgressBar } from '../redux/progressBarSlicer'
import { resetFormStates } from '../redux/formStatesSlicer'


function HomePage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reset_userApplicationData());
        dispatch(updateRoute("Home"));
        dispatch(resetProgressBar());
        dispatch(resetFormStates())
    }, [])

    return (
        <>
            <Header />
            <HomePageServices />
            <HomePageTools />
            <BestRateSection />
            <PrivacySafetySection />
            <Footer />
        </>
    )
}

export default HomePage