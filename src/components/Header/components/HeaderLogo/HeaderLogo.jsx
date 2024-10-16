import "./HeaderLogo.css"
import React from 'react'
import { updateRoute } from "../../../../redux/routingSlicer"
import { useDispatch } from "react-redux"

function HeaderLogo() {

  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(updateRoute("home"))
  }

    return (
      <div className="header-logo" onClick={clickHandler}>
        <img src="./images/Header/logo.png" alt="Logo" className="header-logo__img" />
      </div>
    )
  }

export default HeaderLogo