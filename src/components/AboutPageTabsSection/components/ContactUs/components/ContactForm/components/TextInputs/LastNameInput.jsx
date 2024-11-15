import './TextInput.css';
import React, { useEffect, useRef } from 'react'
import { updateLastName, updateIsLastNameValid } from '../../../../../../../../redux/formStatesSlicer';
import { useDispatch, useSelector } from 'react-redux';

function LastNameInput() {

    const inputElement = useRef(null);
    const dispatch = useDispatch()
    const lastName = useSelector(state => state.formStates.lastName)
    const isLastNameValid = useSelector(state => state.formStates.isLastNameValid)
    const validationPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    const submitCounter = useSelector(state => state.formStates.submitCounter)

    const changeHandler = e => {
        dispatch(updateLastName(e.target.value))
    }

    const focusHandler = () => {
        inputElement.current.className = "text-input text-input--active"
    }

    const blurHandler = () => {
        if (isLastNameValid) {
            inputElement.current.className = "text-input"
        } else {
            inputElement.current.className = "text-input text-input--danger"
        }
    }

    useEffect(() => {
        dispatch(updateIsLastNameValid(validationPattern.test(lastName.trim())))
    }, [lastName])

    useEffect(() => {
        if (submitCounter) {
            blurHandler()
        }
    }, [submitCounter])

    return (
        <div className="text-input" ref={inputElement}>
            <div className="text-input__container">
                <input className="text-input__item text-input__input" autoComplete="off" value={lastName} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div className="text-input__place-holder-container text-input__place-holder-container--active">
                <h3 className="text-input__place-holder">Last Name</h3>
            </div>
        </div>
    )
}

export default LastNameInput