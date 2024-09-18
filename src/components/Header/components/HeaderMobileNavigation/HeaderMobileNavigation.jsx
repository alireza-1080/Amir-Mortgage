import "./HeaderMobileNavigation.css"
import React from 'react'
import { useSelector } from "react-redux"
import HeaderMobileNavigationButton from "./components/HeaderMobileNavigationButton/HeaderMobileNavigationButton"
import HeaderRatesTerms from "../HeaderRatesTerms/HeaderRatesTerms"

function HeaderMobileNavigation() {

  const allTabs = useSelector(state => state.navigation.allTabs)

  return (
    <div className="header-mobile-navigation">
      <div className="header-mobile-navigation__items-container">
        {allTabs.map(tab => {
          return <HeaderMobileNavigationButton key={tab.title} {...tab} />
        })}
      </div>
    </div>
  )
}

export default HeaderMobileNavigation