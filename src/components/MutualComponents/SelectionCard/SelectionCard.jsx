import "./SelectionCard.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add_userApplicationData } from "../../../redux/userApplicationDataSlicer"
import { updateStep } from "../../../redux/progressBarSlicer"

function SelectionCard({ question, title, logo, icon }) {

  const dispatch = useDispatch()
  const step = useSelector(state => state.progressBar.step)

  const clickHandler = () => {
    dispatch(add_userApplicationData({ [`r${step}`]: { respond: title, question, logo } }))
    dispatch(updateStep(step + 1))
  }

  return (
    <div className="selection-card" onClick={clickHandler}>
      <div className="selection-card__image-container">
        {logo && <img src={logo} alt={title} className="selection-card__img" />}
        {icon && icon}
      </div>
      <div className="selection-card__title-container">
        <h2 className="selection-card__title">{title}</h2>
      </div>
    </div>
  )
}

export default SelectionCard