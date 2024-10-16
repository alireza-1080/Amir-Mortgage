import "./CallUs.css"
import React from 'react'
import { FaPhone } from "react-icons/fa6";

function CallUs() {
  return (
    <div className="call-us">
      <div className="call-us__icon-container">
        <FaPhone />
      </div>
      <h3 className="call-us__title">Call Us</h3>
      <h4 className="call-us__title">Consultation:</h4>
      <a className="call-us__number" href="tel: 6043410298">604-341-0298</a>
      <h5 className="call-us__days">Everyday, 9 AM - 9 PM</h5>
    </div>
  )
}

export default CallUs