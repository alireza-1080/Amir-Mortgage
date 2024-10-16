import "./HeaderDesktopNavigationButton.css";
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../../../../../../redux/navigationSlicer";
import { updateRoute } from "../../../../../../redux/routingSlicer"; 

function HeaderDesktopNavigationButton({ title, url }) {

  const dispatch = useDispatch();
  const selectedTab = useSelector(state => state.navigation.selectedTab);
  const button = useRef(null)

  const clickHandler = (param) => {
    dispatch(setSelectedTab(param))
    dispatch(updateRoute(title))
  }

  useEffect(() => {
    if (selectedTab === title){
      button.current.classList.add("header-desktop-navigation-button--selected");
    } else {
      button.current.classList.remove("header-desktop-navigation-button--selected");
    }
  }, [selectedTab])

  return (
    <div className="header-desktop-navigation-button" ref={button} onClick={() => clickHandler(title)}>{title}</div>
  )
}

export default HeaderDesktopNavigationButton