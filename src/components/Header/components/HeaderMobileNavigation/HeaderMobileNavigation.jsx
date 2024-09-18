import "./HeaderMobileNavigation.css"
import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import HeaderMobileNavigationButton from "./components/HeaderMobileNavigationButton/HeaderMobileNavigationButton"
import { setIsBurgerOpen } from "../../../../redux/navigationSlicer"

function HeaderMobileNavigation() {

  const allTabs = useSelector(state => state.navigation.allTabs)
  const outOfMobileNavItem = useRef(null)
  const dispatch = useDispatch();

  const  clickHandler = (event) => {
    if(event.target.className === outOfMobileNavItem.current.className){
      dispatch(setIsBurgerOpen())
    }
  }

  return (
    <div className="header-mobile-navigation" onClick={() => clickHandler(event)} ref={outOfMobileNavItem}>
      <div className="header-mobile-navigation__items-container">
        {allTabs.map(tab => {
          return <HeaderMobileNavigationButton key={tab.title} {...tab} />
        })}
      </div>
    </div>
  )
}

export default HeaderMobileNavigation