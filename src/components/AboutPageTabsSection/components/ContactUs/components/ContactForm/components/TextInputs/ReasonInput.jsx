import './TextInput.css';
import React, { useEffect, useRef } from 'react'
import { updateReason, updateIsReasonValid } from '../../../../../../../../redux/formStatesSlicer';
import { useDispatch, useSelector } from 'react-redux';

function ReasonInput() {

    const inputElement = useRef(null);
    const dispatch = useDispatch()
    const reason = useSelector(state => state.formStates.reason)
    const isReasonValid = useSelector(state => state.formStates.isReasonValid)
    const validationPattern = /^\S.*$/;
    const submitCounter = useSelector(state => state.formStates.submitCounter)

    const changeHandler = e => {
        dispatch(updateReason(e.target.value))
    }

    const focusHandler = () => {
        inputElement.current.className = "text-input text-input--active"
    }

    const blurHandler = () => {
        if (isReasonValid) {
            inputElement.current.className = "text-input"
        } else {
            inputElement.current.className = "text-input text-input--danger"
        }
    }

    useEffect(() => {
        dispatch(updateIsReasonValid(validationPattern.test(reason)))
    }, [reason])

    useEffect(() => {
        if (submitCounter) {
            blurHandler()
        }
    }, [submitCounter])

    return (
        <div className="text-input" ref={inputElement}>
            <div className="text-input__container">
                <input className="text-input__item text-input__input" autoComplete="off" value={reason} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div className="text-input__place-holder-container text-input__place-holder-container--active">
                <h3 className="text-input__place-holder">Reason</h3>
            </div>
        </div>
    )
}

export default ReasonInput