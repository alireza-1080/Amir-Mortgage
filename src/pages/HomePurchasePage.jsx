import "./HomePurchasePage.css"
import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import FooterPicture from '../components/FooterPicture/FooterPicture'
import HomePurchase1 from '../components/HomePurchaseSections/HomePurchase1/HomePurchase1'
import { useDispatch, useSelector } from 'react-redux'
import { updateLength, updateStep } from '../redux/progressBarSlicer'
import { add_userApplicationData } from '../redux/userApplicationDataSlicer'
import { updateRoute } from '../redux/routingSlicer'
import ProgressSection from '../components/MutualComponents/ProgressSection/ProgressSection'
import HomePurchase2 from "../components/HomePurchaseSections/HomePurchase2/HomePurchase2"
import HomePurchase3 from "../components/HomePurchaseSections/HomePurchase3/HomePurchase3"
import HomePurchase4 from "../components/HomePurchaseSections/HomePurchase4/HomePurchase4"
import HomePurchase5 from "../components/HomePurchaseSections/HomePurchase5/HomePurchase5"
import HomePurchase6 from "../components/HomePurchaseSections/HomePurchase6/HomePurchase6"
import HomePurchase7 from "../components/HomePurchaseSections/HomePurchase7/HomePurchase7"
import HomePurchase8 from "../components/HomePurchaseSections/HomePurchase8/HomePurchase8"

function HomePurchasePage() {

  const dispatch = useDispatch()
  const step = useSelector(state => state.progressBar.step)

  useEffect(() => {
    dispatch(updateLength(10))
    dispatch(updateStep(1))
    dispatch(add_userApplicationData({ r0: {type: "Home Purchase"}}))
  }, [])

  useEffect(() => {
    if (step === 0) {
      dispatch(updateRoute("Home"))
      dispatch(updateStep(1))
    }
  }, [step])

  return (
    <div className="home-purchase-page">
        <Header />
        <ProgressSection />
        {step === 1 && <HomePurchase1 />}
        {step === 2 && <HomePurchase2 />}
        {step === 3 && <HomePurchase3 />}
        {step === 4 && <HomePurchase4 />}
        {step === 5 && <HomePurchase5 />}
        {step === 6 && <HomePurchase6 />}
        {step === 7 && <HomePurchase7 />}
        {step === 8 && <HomePurchase8 />}
        <FooterPicture />
    </div>
  )
}

export default HomePurchasePage