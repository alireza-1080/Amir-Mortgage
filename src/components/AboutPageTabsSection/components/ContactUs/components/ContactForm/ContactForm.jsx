import "./ContactForm.css"
import React from 'react'
import FirstNameInput from "./components/TextInputs/FirstNameInput";
import LastNameInput from "./components/TextInputs/LastNameInput";
import EmailInput from "./components/TextInputs/EmailInput";
import PhoneInput from "./components/TextInputs/PhoneInput";
import ReasonInput from "./components/TextInputs/ReasonInput";
import CommesntsInput from "./components/TextInputs/CommesntsInput";
import ContactFormSubmitButton from './components/ContactFormSubmitButton/ContactFormSubmitButton'

function ContactForm() {

  return (
    <div className="contact-form">
      <div className={`first-name__container`} style={{ gridArea: `fn` }}>
        <FirstNameInput />
      </div>
      <div className={`last-name__container`} style={{ gridArea: `ln` }}>
        <LastNameInput />
      </div>
      <div className={`email__container`} style={{ gridArea: `e` }}>
        <EmailInput />
      </div>
      <div className={`phone__container`} style={{ gridArea: `p` }}>
        <PhoneInput />
      </div>
      <div className={`reason__container`} style={{ gridArea: `r` }}>
        <ReasonInput />
      </div>
      <div className={`comments__container`} style={{ gridArea: `c` }}>
        <CommesntsInput />
      </div>
      <div className={`button__container`} style={{ gridArea: `btn` }}>
        <ContactFormSubmitButton />
      </div>
    </div>
  )
}

export default ContactForm;