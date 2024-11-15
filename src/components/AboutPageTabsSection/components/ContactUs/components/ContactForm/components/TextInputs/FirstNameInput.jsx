import './TextInput.css';
import React, { useEffect, useRef } from 'react'
import { updateFirstName, updateIsFirstNameValid } from '../../../../../../../../redux/formStatesSlicer';
import { useDispatch, useSelector } from 'react-redux';

function FirstNameInput() {

    const inputElement = useRef(null);
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.formStates.firstName)
    const isFirstNameValid = useSelector(state => state.formStates.isFirstNameValid)
    const validationPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    const submitCounter = useSelector(state => state.formStates.submitCounter)

    const changeHandler = e => {
        dispatch(updateFirstName(e.target.value))
    }

    const focusHandler = () => {
        inputElement.current.className = "text-input text-input--active"
    }

    const blurHandler = () => {
        if (isFirstNameValid) {
            inputElement.current.className = "text-input"
        } else {
            inputElement.current.className = "text-input text-input--danger"
        }
    }

    useEffect(() => {
        dispatch(updateIsFirstNameValid(validationPattern.test(firstName.trim())))
    }, [firstName])

    useEffect(() => {
        if (submitCounter) {
            blurHandler()
        }
    }, [submitCounter])


    return (
        <div className="text-input" ref={inputElement}>
            <div className="text-input__container">
                <input className="text-input__item text-input__input" autoComplete="off" value={firstName} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div className="text-input__place-holder-container text-input__place-holder-container--active">
                <h3 className="text-input__place-holder">First Name</h3>
            </div>
        </div>
    )
}

export default FirstNameInput;