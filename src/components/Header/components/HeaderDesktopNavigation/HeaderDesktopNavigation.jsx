import "./HeaderDesktopNavigation.css";
import React from 'react'
import { useSelector } from "react-redux";
import HeaderDesktopNavigationButton from "./components/HeaderDesktopNavigationButton/HeaderDesktopNavigationButton";

function HeaderDesktopNavigation() {

  const tabs = useSelector(state => state.navigation.allTabs)

  return (
    <div className="header-desktop-navigation">
      {tabs.map(tab => {
        return <HeaderDesktopNavigationButton key={tab.title} {...tab}/>
      })}
    </div>
  )
}

export default HeaderDesktopNavigation