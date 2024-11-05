import { useDispatch } from "react-redux"
import "./SelectionCard.css"
import React from 'react'
import { add_userApplicationData } from "../../../redux/userApplicationDataSlicer"

function SelectionCard({ question, title, logo }) {

  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(add_userApplicationData({1:{title, question}}))
  }
  return (
    <div className="selection-card" onClick={clickHandler}>
      <div className="selection-card__image-container">
        <img src={logo} alt={title} className="selection-card__img"/>
      </div>
      <div className="selection-card__title-container">
        <h2 className="selection-card__title">{title}</h2>
      </div>
    </div>
  )
}

export default SelectionCard