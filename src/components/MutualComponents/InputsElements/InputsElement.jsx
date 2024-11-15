import { useDispatch } from "react-redux";
import "./InputsElement.css"
import React, { useEffect, useRef, useState } from 'react'

function InputsElement({ title, validationPattern, submitCounter, value, setValue, isValueValid, setIsValueValid }) {

  const inputElement = useRef(null);

  const changeHandler = event => {
    setValue(event.target.value)
  }

  const focusHandler = () => {
    inputElement.current.className = "input-element input-element--active"
  }

  const blurHandler = () => {
    if (isValueValid) {
      inputElement.current.className = "input-element"
    } else {
      inputElement.current.className = "input-element input-element--danger"
    }
  }

  useEffect(() => {
    if (submitCounter) {
      blurHandler()
    }
  }, [submitCounter])

  useEffect(() => {
    setIsValueValid(validationPattern.test(value.trim()))
  }, [value])

  return (
    <div className="input-element" ref={inputElement}>
      <div className="input-element__container">
        <input className="input-element__item input-element__input" autoComplete="off" value={value} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/>
      </div>
      <div className="input-element__place-holder-container input-element__place-holder-container--active">
        <h3 className="input-element__place-holder">{title}</h3>
      </div>
    </div>
  )
}

export default InputsElement