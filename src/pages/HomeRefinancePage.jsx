import "./HomeRefinancePage.css"
import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import FooterPicture from '../components/FooterPicture/FooterPicture'
import ProgressSection from '../components/MutualComponents/ProgressSection/ProgressSection'
import HomeRefinance1 from '../components/HomeRefinanceSections/HomeRefinance1/HomeRefinance1'
import { useDispatch, useSelector } from "react-redux";
import { updateStep, updateLength } from "../redux/progressBarSlicer"
import { updateRoute } from "../redux/routingSlicer"

function HomeRefinancePage() {

  const dispatch = useDispatch()
  const step = useSelector(state => state.progressBar.step)

  useEffect(() => {
    dispatch(updateLength(10))
    dispatch(updateStep(1))
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
      <FooterPicture />
    </div>
  )
}

export default HomeRefinancePage