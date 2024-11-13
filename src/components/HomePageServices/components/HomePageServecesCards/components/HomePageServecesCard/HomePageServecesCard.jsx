import "./HomePageServecesCard.css"
import React, { useEffect, useRef } from 'react'
import { updateRoute } from "../../../../../../redux/routingSlicer";
import { useDispatch } from "react-redux";

function HomePageServecesCard({ title, icon, index }) {

  const card = useRef(null);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (index % 2) {
  //     card.current.style.setProperty("--card-position", "flex-start")
  //   } else {
  //     card.current.style.setProperty("--card-position", "flex-end")
  //   }
  // }, [])

  const clickHandler = () => {
    dispatch(updateRoute(title))
  }

  return (
    <div className="home-page-services-card" ref={card} onClick={clickHandler}>
      <img src={icon} alt={title} className="home-page-services-card__img" />
      <h2 className="home-page-services-card__title">{title}</h2>
    </div>
  )
}

export default HomePageServecesCard