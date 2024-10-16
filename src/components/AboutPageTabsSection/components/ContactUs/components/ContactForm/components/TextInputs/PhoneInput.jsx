import './TextInput.css';
import React, { useEffect, useRef } from 'react'
import { updatePhone, updateIsPhoneValid } from '../../../../../../../../redux/formStatesSlicer';
import { useDispatch, useSelector } from 'react-redux';

function PhoneInput() {

    const inputElement = useRef(null);
    const dispatch = useDispatch()
    const phone = useSelector(state => state.formStates.phone)
    const isPhoneValid = useSelector(state => state.formStates.isPhoneValid)
    const validationPattern = /^(\+?1\s?)?(\(?[2-9]\d{2}\)?)[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const submitCounter = useSelector(state => state.formStates.submitCounter)

    const changeHandler = e => {
        dispatch(updatePhone(e.target.value))
    }

    const focusHandler = () => {
        inputElement.current.className = "text-input text-input--active"
    }

    const blurHandler = () => {
        if (isPhoneValid) {
            inputElement.current.className = "text-input"
        } else {
            inputElement.current.className = "text-input text-input--danger"
        }
    }

    useEffect(() => {
        dispatch(updateIsPhoneValid(validationPattern.test(phone)))
    }, [phone])

    useEffect(() => {
        if (submitCounter) {
            blurHandler()
        }
    }, [submitCounter])

    return (
        <div className="text-input" ref={inputElement}>
            <div className="text-input__container">
                <input className="text-input__item text-input__input" autoComplete="off" value={phone} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div className="text-input__place-holder-container text-input__place-holder-container--active">
                <h3 className="text-input__place-holder">Phone</h3>
            </div>
        </div>
    )
}

export default PhoneInput