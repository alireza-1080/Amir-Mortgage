import './TextInput.css';
import React, { useEffect, useRef } from 'react'
import { updateComments, updateIsCommentsValid } from '../../../../../../../../redux/formStatesSlicer';
import { useDispatch, useSelector } from 'react-redux';

function CommesntsInput() {

    const inputElement = useRef(null);
    const dispatch = useDispatch()
    const comments = useSelector(state => state.formStates.comments)
    const isCommentsValid = useSelector(state => state.formStates.isCommentsValid)
    const validationPattern = /^\S.*$/;
    const submitCounter = useSelector(state => state.formStates.submitCounter)

    const changeHandler = e => {
        dispatch(updateComments(e.target.value))
    }
    
    const focusHandler = () => {
        inputElement.current.className = "text-input text-input--active"
    }
    
    const blurHandler = () => {
        if (isCommentsValid) {
            inputElement.current.className = "text-input"
        } else {
            inputElement.current.className = "text-input text-input--danger"
        }
    }
    
    useEffect(() => {
        dispatch(updateIsCommentsValid(validationPattern.test(comments)))
    }, [comments])

    useEffect(() => {
        if (submitCounter) {
            blurHandler()
        }
    }, [submitCounter])

    return (
        <div className="text-input" ref={inputElement}>
            <div className="text-input__container">
                <div className="text-input__text-area-container">
                    <textarea className="text-input__item text-input__text-area" autoComplete="off" value={comments} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}></textarea>
                </div>
            </div>
            <div className="text-input__place-holder-container text-input__place-holder-container--active">
                <h3 className="text-input__place-holder">Comments or Concerns</h3>
            </div>
        </div>
    )
}

export default CommesntsInput