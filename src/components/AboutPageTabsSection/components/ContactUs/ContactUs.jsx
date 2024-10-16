import "./ContactUs.css"
import React from 'react'
import ContactUsAnyTime from "./components/ContactUsAnyTime/ContactUsAnyTime"
import CallUs from "./components/CallUs/CallUs"
import EmailUs from "./components/EmailUs/EmailUs"
import ContactForm from "./components/ContactForm/ContactForm"

function ContactUs() {
  return (
    <div className="contact-us container">
      <div className="contact-us__container">
        <div className="contact-us__any-time">
          <ContactUsAnyTime />
        </div>
        <div className="contact-us__call-us">
          <CallUs />
        </div>
        <div className="contact-us__email-us">
          <EmailUs />
        </div>
        <div className="contact-us__contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUs