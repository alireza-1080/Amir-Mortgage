import './TextInput.css';
import React, { useEffect, useRef } from 'react'
import { updateEmail, updateIsEmailValid } from '../../../../../../../../redux/formStatesSlicer';
import { useDispatch, useSelector } from 'react-redux';

function EmailInput() {

    const inputElement = useRef(null);
    const dispatch = useDispatch()
    const email = useSelector(state => state.formStates.email)
    const isEmailValid = useSelector(state => state.formStates.isEmailValid)
    const validationPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const submitCounter = useSelector(state => state.formStates.submitCounter)

    const changeHandler = e => {
        dispatch(updateEmail(e.target.value))
    }

    const focusHandler = () => {
        inputElement.current.className = "text-input text-input--active"
    }

    const blurHandler = () => {
        if (isEmailValid) {
            inputElement.current.className = "text-input"
        } else {
            inputElement.current.className = "text-input text-input--danger"
        }
    }

    useEffect(() => {
        dispatch(updateIsEmailValid(validationPattern.test(email)))
    }, [email])

    useEffect(() => {
        if (submitCounter) {
            blurHandler()
        }
    }, [submitCounter])


    return (
        <div className="text-input" ref={inputElement}>
            <div className="text-input__container">
                <input className="text-input__item text-input__input" autoComplete="off" value={email} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div className="text-input__place-holder-container text-input__place-holder-container--active">
                <h3 className="text-input__place-holder">Email</h3>
            </div>
        </div>
    )
}

export default EmailInput