import "./HeaderHamburgerMenu.css"
import React, { useEffect, useRef } from 'react'
import { IoMenu } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setIsBurgerOpen } from "../../../../redux/navigationSlicer";

function HeaderHamburgerMenu() {

  const dispatch = useDispatch()
  const isBurgerOpen = useSelector(state => state.navigation.isBurgerOpen)
  const menuIcon = useRef(null);
  const cancelIcon = useRef(null);

  const clickHandler = () => {
    dispatch(setIsBurgerOpen())
  }

  useEffect(() => {
    if(isBurgerOpen){
      menuIcon.current.classList.add("header-hamburger-menu__icon-menu--hide")
      cancelIcon.current.classList.add("header-hamburger-menu__icon-cancel--show")
    } else {
      menuIcon.current.classList.remove("header-hamburger-menu__icon-menu--hide")
      cancelIcon.current.classList.remove("header-hamburger-menu__icon-cancel--show")
    }
  }, [isBurgerOpen])

  return (
    <div className="header-hamburger-menu" onClick={() => clickHandler()}>
      <div className="header-hamburger-menu__icon-secton">
        <div className="header-hamburger-menu__icon header-hamburger-menu__icon-menu" ref={menuIcon}>
          <IoMenu />
        </div>
        <div className="header-hamburger-menu__icon header-hamburger-menu__icon-cancel" ref={cancelIcon}>
          <GiCancel />
        </div>
      </div>
      <div className="header-hamburger-menu__title-section">
        <h5 className="header-hamburger-menu-title">MENU</h5>
      </div>
    </div>
  )
}

export default HeaderHamburgerMenu