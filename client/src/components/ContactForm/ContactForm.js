import React, { useState } from "react";
import "./ContactForm.css";
import API from "../../utils/API";

function ContactForm() {
    const [formObject, setFormObject] = useState({
        fullName: "",
        email: "",
        message: ""
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value});
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.fullName && formObject.email) {
          API.sendEmail({
            fullName: formObject.fullName,
            email: formObject.email,
            message: formObject.message
          })
            .then(() => setFormObject({
              fullName: "",
              email: "",
              message: ""
            }))
            .then(() => console.log("Email Sent." + formObject))
            .catch(err => console.log(err));
        }
      };

    return (
        <form id="contactForm">
            <label htmlFor="fullName">Full Name:</label><br />
            <input type="text" onChange={handleInputChange} name="fullName"></input><br />
            <label htmlFor="email">E-Mail:</label><br />
            <input type="text" onChange={handleInputChange} name="email"></input><br />
            <label htmlFor="message">Message:</label><br />
            <textarea type="text" onChange={handleInputChange} name="message"></textarea><br />
            <button id="submitForm" onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}
export default ContactForm;