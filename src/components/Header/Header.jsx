import "./Header.css";
import React from 'react'
import HeaderDesktopNavigation from "./components/HeaderDesktopNavigation/HeaderDesktopNavigation";
import HeaderHamburgerMenu from "./components/HeaderHamburgerMenu/HeaderHamburgerMenu";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import HeaderMobileNavigation from "./components/HeaderMobileNavigation/HeaderMobileNavigation";

function Header() {
    return (
        <div className="header-bg">
            <div className="header container">
                <div className="header__logo">
                    <HeaderLogo />
                </div>
                <div className="header__desktop-nav">
                    <HeaderDesktopNavigation />
                </div>
                <div className="header__hamburger">
                    <HeaderHamburgerMenu />
                </div>
                <div className="header__mobile-nav">
                    <HeaderMobileNavigation />
                </div>
            </div>
        </div>
    )
}

export default Header