import "./SubmitButton.css"
import React from 'react'

function SubmitButton({ clickHandler, submit }) {
    return (
        <div className="submit-button" onClick={clickHandler}>
            <button className="submit-button__btn">{submit ? "SUBMIT" : "NEXT"}</button>
        </div>
    )
}

export default SubmitButton