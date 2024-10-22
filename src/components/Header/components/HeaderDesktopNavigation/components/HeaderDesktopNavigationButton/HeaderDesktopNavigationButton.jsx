import "./HeaderDesktopNavigationButton.css";
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../../../../../../redux/navigationSlicer";
import { updateRoute } from "../../../../../../redux/routingSlicer"; 

function HeaderDesktopNavigationButton({ title }) {

  const dispatch = useDispatch();
  const route = useSelector(state => state.routing.route);
  const button = useRef(null)

  const clickHandler = (param) => {
    dispatch(setSelectedTab(param))
    dispatch(updateRoute(title))
  }

  useEffect(() => {
    if (route === title){
      button.current.classList.add("header-desktop-navigation-button--selected");
    } else {
      button.current.classList.remove("header-desktop-navigation-button--selected");
    }
  }, [route])

  return (
    <div className="header-desktop-navigation-button" ref={button} onClick={() => clickHandler(title)}>{title}</div>
  )
}

export default HeaderDesktopNavigationButton