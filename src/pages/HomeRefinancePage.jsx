import "./HomeRefinancePage.css"
import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import FooterPicture from '../components/FooterPicture/FooterPicture'
import ProgressSection from '../components/MutualComponents/ProgressSection/ProgressSection'
import HomeRefinance1 from '../components/HomeRefinanceSections/HomeRefinance1/HomeRefinance1'
import HomeRefinance2 from '../components/HomeRefinanceSections/HomeRefinance2/HomeRefinance2'
import HomeRefinance3 from '../components/HomeRefinanceSections/HomeRefinance3/HomeRefinance3'
import HomeRefinance4 from "../components/HomeRefinanceSections/HomeRefinance4/HomeRefinance4"
import HomeRefinance5 from "../components/HomeRefinanceSections/HomeRefinance5/HomeRefinance5"
import { useDispatch, useSelector } from "react-redux";
import { updateStep, updateLength } from "../redux/progressBarSlicer"
import { updateRoute } from "../redux/routingSlicer"
import { add_userApplicationData } from "../redux/userApplicationDataSlicer"

function HomeRefinancePage() {

  const dispatch = useDispatch()
  const step = useSelector(state => state.progressBar.step)

  useEffect(() => {
    dispatch(updateLength(10))
    dispatch(updateStep(1))
    dispatch(add_userApplicationData({ r0: {type: "Home Refinance"}}))
  }, [])

  useEffect(() => {
    if (step === 0) {
      dispatch(updateRoute("Home"))
      dispatch(updateStep(1))
    }
  }, [step])

  return (
    <div className='home-refinance-page'>
      <Header />
      <ProgressSection />
      {step === 1 && <HomeRefinance1 />}
      {step === 2 && <HomeRefinance2 />}
      {step === 3 && <HomeRefinance3 />}
      {step === 4 && <HomeRefinance4 />}
      {step === 5 && <HomeRefinance5 />}
      <FooterPicture />
    </div>
  )
}

export default HomeRefinancePage