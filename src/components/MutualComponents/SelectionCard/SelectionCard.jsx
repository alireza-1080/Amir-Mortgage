import "./SelectionCard.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add_userApplicationData } from "../../../redux/userApplicationDataSlicer"
import { updateStep } from "../../../redux/progressBarSlicer"

function SelectionCard({ question, title, logo }) {

  const dispatch = useDispatch()
  const step = useSelector(state => state.progressBar.step)

  const clickHandler = () => {
    dispatch(add_userApplicationData({ [step]: { respond: title, question, logo } }))
    dispatch(updateStep(step + 1))
  }

  return (
    <div className="selection-card" onClick={clickHandler}>
      <div className="selection-card__image-container">
        <img src={logo} alt={title} className="selection-card__img" />
      </div>
      <div className="selection-card__title-container">
        <h2 className="selection-card__title">{title}</h2>
      </div>
    </div>
  )
}

export default SelectionCard