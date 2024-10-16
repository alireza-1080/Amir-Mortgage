import "./EmailUs.css"
import React from 'react'
import { MdEmail } from "react-icons/md";

function EmailUs() {
  return (
    <div className="email-us">
      <div className="email-us__icon-container">
        <MdEmail />
      </div>
      <h3 className="email-us__title">Email Us</h3>
      <h4 className="email-us__title">Consultation:</h4>
      <a className="email-us__email" href="mailto:amir@originmortgages.ca">amir@originmortgages.ca</a>
      <h5 className="email-us__time">24 hours a day, 7 days a week</h5>
    </div>
  )
}

export default EmailUs