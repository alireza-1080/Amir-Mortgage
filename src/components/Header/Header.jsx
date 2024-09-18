import "./Header.css";
import React, { useEffect, useRef } from 'react'
import HeaderDesktopNavigation from "./components/HeaderDesktopNavigation/HeaderDesktopNavigation";
import HeaderHamburgerMenu from "./components/HeaderHamburgerMenu/HeaderHamburgerMenu";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import HeaderMobileNavigation from "./components/HeaderMobileNavigation/HeaderMobileNavigation";
import { useSelector } from "react-redux";
import HeaderRatesTerms from "./components/HeaderRatesTerms/HeaderRatesTerms";

function Header() {

    const isBurgerOpen = useSelector(state => state.navigation.isBurgerOpen)
    const mobileNavSideBarElem = useRef(null)

    useEffect(() => {
        if(isBurgerOpen){
            mobileNavSideBarElem.current.classList.add("header__mobile-nav--show")
        } else {
            mobileNavSideBarElem.current.classList.remove("header__mobile-nav--show")
        }
    }, [isBurgerOpen])

    return (
        <div className="header-bg">
            <div className="header container">
                <div className="header__rates-terms">
                    <HeaderRatesTerms />
                </div>
                <div className="header__logo">
                    <HeaderLogo />
                </div>
                <div className="header__desktop-nav">
                    <HeaderDesktopNavigation />
                </div>
                <div className="header__hamburger">
                    <HeaderHamburgerMenu />
                </div>
                <div className="header__mobile-nav" ref={mobileNavSideBarElem}>
                    <HeaderMobileNavigation />
                </div>
            </div>
        </div>
    )
}

export default Header