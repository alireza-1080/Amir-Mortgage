import "./BestRateSubmit.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateRoute } from "../../../../../../redux/routingSlicer"

function BestRateSubmit() {

  const selectedService = useSelector(state => state.selectedService.selectedService)
  const allServices = useSelector(state => state.services)
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(updateRoute(allServices[selectedService].title))
  }

  return (
    <div className="best-rate-submit" onClick={clickHandler}>
        <button className="best-rate-submit__btn">Start Saving Today</button>
    </div>
  )
}

export default BestRateSubmit